package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/sns"
)

type FormData struct {
	Query string `json:"query"`
	Email string `json:"email"`
}

func handler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	var greeting string
	var err error
	var response events.APIGatewayProxyResponse
	sourceIP := request.RequestContext.Identity.SourceIP

	if sourceIP == "" {
		greeting = fmt.Sprintf("Hello, %s!\n", "NO SOURCE IP")
	} else {
		greeting = fmt.Sprintf("Hello, %s!\n", sourceIP)
	}

	switch request.HTTPMethod {
	case "POST":
		response, err = PostHandler(request)
		if err != nil {
			return events.APIGatewayProxyResponse{
				StatusCode: 500,
				Body:       err.Error(),
			}, nil
		}
	case "OPTIONS":
		response, _ = OptionsHandler()
		if err != nil {
			return events.APIGatewayProxyResponse{
				StatusCode: 500,
				Body:       err.Error(),
			}, nil
		}
	default:
		response = events.APIGatewayProxyResponse{
			Body:       greeting,
			StatusCode: 200,
		}
	}

	return response, nil

}

func PostHandler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	var formdata FormData
	if request.Body == "" {
		return events.APIGatewayProxyResponse{
			StatusCode: 400,
			Body:       "NO BODY",
		}, nil
	}
	bodycontent := request.Body

	err := json.Unmarshal([]byte(bodycontent), &formdata)
	log.Println(formdata)

	if err != nil {
		log.Fatalf("Failed to Marsh JSON: %s", err.Error())
		return events.APIGatewayProxyResponse{
			StatusCode: 500,
			Body:       fmt.Sprintf("ERROR OCCURRED WHILE MARSH JSON \n %s", err.Error()),
		}, err
	}

	_session, err := session.NewSession(&aws.Config{
		Region: aws.String(os.Getenv("AWS_REGION")), // Get AWS region from environment variable
	})
	if err != nil {
		log.Fatalf("Failed to connect to AWS: %s", err.Error())
		return events.APIGatewayProxyResponse{
			StatusCode: 500,
			Body:       fmt.Sprintf("ERROR OCCURRED WHILE CREATING SESSION \n %s", err.Error()),
		}, err
	}

	SNSServiceClient := sns.New(_session)

	topicArn := "arn:aws:sns:ap-south-1:082291247210:portfolio-query"
	SMS := fmt.Sprintf(`
			Query : %s
			Email : %s
		`, formdata.Query,formdata.Email)

	SNSResult, err := SNSServiceClient.Publish(&sns.PublishInput{
		Message:  aws.String(SMS),
		TopicArn: &topicArn,
	})

	if err != nil {
		log.Fatalf("Failed to Send SMS: %s", err.Error())
		return events.APIGatewayProxyResponse{
			StatusCode: 500,
			Body:       fmt.Sprintf("ERROR OCCURRED WHILE SENDING SMS \n %s", err.Error()),
		}, err
	}
	response := events.APIGatewayProxyResponse{
		StatusCode: 200,
		Headers: map[string]string{
			"Access-Control-Allow-Origin": "*",
		},
		Body: *SNSResult.MessageId,
	}
	return response, nil
}

func OptionsHandler() (events.APIGatewayProxyResponse, error) {
	response := events.APIGatewayProxyResponse{
		StatusCode: 200,
		Headers: map[string]string{
			"Access-Control-Allow-Origin":  "*",
			"Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type",
		},
		Body: "Handled OPTIONS",
	}
	return response, nil
}

func main() {
	lambda.Start(handler)
}
