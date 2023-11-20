package main

import (
	"bytes"
	"context"
	"encoding/base64"
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
	case "GET":
		bucketName := os.Getenv("AUDIO_BUCKET")
		objectKey := os.Getenv("AUDIO_KEY")
		fileContent, err := audioGET(bucketName, objectKey)
		if err != nil {
			return events.APIGatewayProxyResponse{
				StatusCode: 500,
				Body:       err.Error(),
			}, nil
		}

		return events.APIGatewayProxyResponse{
			StatusCode:      200,
			Headers:         map[string]string{"Content-Type": "audio/ogg"},
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

func audioGET(bucketName string, objectKey string) (string, error) {
	_session, err := session.NewSession(&aws.Config{
		Region: aws.String(os.Getenv("MY_AWS_REGION")), // Get AWS region from environment variable
	})

	if err != nil {
		log.Println("error in audioGET line 60")
		log.Println(err)
		return "", err
	}

	svc := s3.New(_session)

	input := &s3.GetObjectInput{
		Bucket: aws.String(bucketName),
		Key:    aws.String(objectKey),
	}

	result, err := svc.GetObject(input)
	if err != nil {
		log.Println("error in audioGET line 74")
		log.Println(err)
		return "", err
	}

	defer result.Body.Close()
	buf := new(bytes.Buffer)
	buf.ReadFrom(result.Body)
	noneEncodedData := buf.Bytes()

	encodedData := base64.StdEncoding.EncodeToString(noneEncodedData)
	// fileContent, err := io.ReadAll(result.Body)
	// if err != nil {
	// 	log.Println("error in audioGET line 83")
	// 	log.Println(err)
	// 	return nil, err
	// }
	// return fileContent, nil

	return encodedData, nil
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
