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

type PresignedURLResumeResponse struct {
	URL string `json:"url"`
}

func getPreSignedURLForResumeDownload() (string, error) {
	sess := session.Must(session.NewSession())
	svc := s3.New(sess)
	bucketName := os.Getenv("STORAGE_BUCKET")
	objectKey := os.Getenv("RESUME_KEY")
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

func resumeHandler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	headers := map[string]string{
		"Access-Control-Allow-Origin":  "*",
		"Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type",
	}
	switch request.HTTPMethod {
	case "OPTIONS":
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusOK,
			Headers:    headers,
			Body:       "Handled OPTIONS",
		}, nil
	case "GET":

		preSignedURL, err := getPreSignedURLForResumeDownload()
		if err != nil {
			log.Println(err)
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusInternalServerError,
				Body:       "Failed to Genrate URL ",
			}, err
		}

		responseBody, err := json.Marshal(PresignedURLResumeResponse{URL: preSignedURL})
		if err != nil {
			log.Println("Failed to marshal JSON response:", err)
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusInternalServerError,
				Body:       "Failed to marshal JSON response",
			}, err
		}
		headers["Content-Type"] = "application/json"
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusOK,
			Headers:    headers,
			Body:       string(responseBody),
		}, nil
	default:
		return events.APIGatewayProxyResponse{
			Body:       "NO VALID REQUEST",
			Headers:    headers,
			StatusCode: http.StatusBadRequest,
		}, nil
	}
}
