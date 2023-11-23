package main

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

type PresignedURLAudioResponse struct {
	URL string `json:"url"`
}

func getPresignedURLForAudio(bucketName string, objectKey string) (string, error) {
	_session, err := session.NewSession(&aws.Config{
		Region: aws.String(os.Getenv("MY_AWS_REGION")),
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
	req, _ := svc.GetObjectRequest(input)
	url, err := req.Presign(15 * time.Minute) // Presigned URL is valid for 15 minutes
	if err != nil {
		return "", err
	}

	return url, nil
}

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
		preSignedURL, err := getPresignedURLForAudio(bucketName, objectKey)
		if err != nil {
			log.Println(err)
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusInternalServerError,
				Body:       "Failed to Genrate URL ",
			}, err
		}
		responseBody, err := json.Marshal(PresignedURLAudioResponse{URL: preSignedURL})
		headers["Content-Type"] = "application/json"
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
			Body:            string(responseBody),
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
