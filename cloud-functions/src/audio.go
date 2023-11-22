package main

import (
	"bytes"
	"context"
	"encoding/base64"
	"log"
	"net/http"
	"os"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

func audioHandler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	headers := map[string]string{
		"Access-Control-Allow-Origin":  "*",
		"Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type",
	}
	switch request.HTTPMethod {
	case "GET":
		bucketName := os.Getenv("STORAGE_BUCKET")
		objectKey := os.Getenv("AUDIO_KEY")
		fileContent, err := getAudioFromS3(bucketName, objectKey)
		headers["Content-Type"] = "audio/ogg"
		if err != nil {
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusInternalServerError,
				Headers:    headers,
				Body:       err.Error(),
			}, nil
		}

		return events.APIGatewayProxyResponse{
			StatusCode:      http.StatusOK,
			Headers:         headers,
			IsBase64Encoded: true,
			Body:            fileContent,
		}, nil
	case "OPTIONS":
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusOK,
			Headers:    headers,
			Body:       "Handled OPTIONS",
		}, nil
	default:
		return events.APIGatewayProxyResponse{
			Body:       "NO VALID REQUEST",
			Headers:    headers,
			StatusCode: http.StatusBadRequest,
		}, nil
	}

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
