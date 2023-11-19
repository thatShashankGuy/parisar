package main

import (
	"context"
	"io/ioutil"
	"log"
	"os"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

func audioHandler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	var err error
	var response events.APIGatewayProxyResponse
	switch request.HTTPMethod {
	case "POST":
		bucketName := "bucketName"
		objectKey := "objectKey"
		fileContent, err := audioPOST(bucketName, objectKey)
		if err != nil {
			return events.APIGatewayProxyResponse{
				StatusCode: 500,
				Body:       err.Error(),
			}, nil
		}

		return events.APIGatewayProxyResponse{
			StatusCode:      200,
			IsBase64Encoded: true,
			Body:            string(fileContent),
		}, nil
	case "OPTIONS":
		response, _ = audioOPTIONS()
		if err != nil {
			return events.APIGatewayProxyResponse{
				StatusCode: 500,
				Body:       err.Error(),
			}, nil
		}
	default:
		response = events.APIGatewayProxyResponse{
			Body:       "NO VALID REQUEST",
			StatusCode: 200,
		}
	}

	return response, nil

}

func audioPOST(bucketName string, objectKey string) ([]byte, error) {
	_session, err := session.NewSession(&aws.Config{
		Region: aws.String(os.Getenv("AWS_REGION")), // Get AWS region from environment variable
	})

	if err != nil {
		log.Println(err)
		return nil, err
	}

	svc := s3.New(_session)

	input := &s3.GetObjectInput{
		Bucket: aws.String(bucketName),
		Key:    aws.String(objectKey),
	}

	result, err := svc.GetObject(input)
	if err != nil {
		log.Println(err)
		return nil, err
	}

	defer result.Body.Close()

	fileContent, err := ioutil.ReadAll(result.Body)
	if err != nil {
		return nil, err
	}

	return fileContent, nil
}

func audioOPTIONS() (events.APIGatewayProxyResponse, error) {
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
