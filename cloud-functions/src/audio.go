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
	var response events.APIGatewayProxyResponse
	headers := map[string]string{
		"Access-Control-Allow-Origin":  "*",
		"Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type",
	}
	switch request.HTTPMethod {
	case "GET":
		bucketName := os.Getenv("AUDIO_BUCKET")
		objectKey := os.Getenv("AUDIO_KEY")
		fileContent, err := getAudioFromS3(bucketName, objectKey)
		if err != nil {
			return events.APIGatewayProxyResponse{
				StatusCode: 500,
				Headers:    headers,
				Body:       err.Error(),
			}, nil
		}

		return events.APIGatewayProxyResponse{
			StatusCode:      200,
			Headers:         map[string]string{"Content-Type": "application/json"},
			IsBase64Encoded: true,
			Body:            string(fileContent),
		}, nil
	case "OPTIONS":
		response := events.APIGatewayProxyResponse{
			StatusCode: 200,
			Headers:    headers,
			Body:       "Handled OPTIONS",
		}
		return response, nil
	default:
		response = events.APIGatewayProxyResponse{
			Body:       "NO VALID REQUEST",
			Headers:    headers,
			StatusCode: 200,
		}
	}

	return response, nil

}

func getAudioFromS3(bucketName string, objectKey string) (string, error) {
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
	return encodedData, nil
}
