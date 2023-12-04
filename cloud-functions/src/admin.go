package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

type uploadURLResponse struct {
	URL string `json:"url"`
}

type uploadURLRequestBody struct {
	FileName string `json:"fileName"`
}

type audioGridBody struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
	Size string `json:"size"`
}

func uploadURLHandler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	switch request.HTTPMethod {
	case "POST":
		var req uploadURLRequestBody
		err := json.Unmarshal([]byte(request.Body), &req)
		if err != nil {
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusInternalServerError,
				Headers:    headers,
				Body:       err.Error(),
			}, nil
		}

		bucketName := os.Getenv("STORAGE_BUCKET")
		audioFolder := os.Getenv("AUDIO_ADDRESS") + "/" + req.FileName
		preSignedURL, err := getPreSignedURLForUpload(bucketName, audioFolder)
		if err != nil {
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusInternalServerError,
				Headers:    headers,
				Body:       err.Error(),
			}, nil
		}
		responseBody, err := json.Marshal(uploadURLResponse{URL: preSignedURL})
		headers["Content-Type"] = "application/json"
		if err != nil {
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusInternalServerError,
				Headers:    headers,
				Body:       err.Error(),
			}, nil
		}
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusOK,
			Headers:    headers,
			Body:       string(responseBody),
		}, nil
	case "OPTIONS":
		headers["Content-Type"] = "application/json"
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusOK,
			Headers:    headers,
			Body:       "Handled OPTIONS",
		}, nil
	default:
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusInternalServerError,
			Headers:    headers,
			Body:       "something went wrong",
		}, nil

	}
}

func getPreSignedURLForUpload(bucketName string, objectKey string) (string, error) {
	_session, err := session.NewSession(&aws.Config{
		Region: aws.String(os.Getenv("MY_AWS_REGION")),
	})

	if err != nil {
		log.Println("error in audioGET line 60")
		log.Println(err)
		return "", err
	}

	svc := s3.New(_session)

	input := &s3.PutObjectInput{
		Bucket: aws.String(bucketName),
		Key:    aws.String(objectKey),
	}
	fmt.Println(input)
	req, _ := svc.PutObjectRequest(input)
	url, err := req.Presign(15 * time.Minute) // Presigned URL is valid for 15 minutes
	if err != nil {
		return "", err
	}

	return url, nil
}

func audioDashboardHandler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	switch request.HTTPMethod {
	case "GET":
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusOK,
			Headers:    headers,
			Body:       "Handled OPTIONS",
		}, nil
	case "OPTION":
		headers["Content-Type"] = "application/json"
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusOK,
			Headers:    headers,
			Body:       "Handled OPTIONS",
		}, nil
	default:
		headers["Content-Type"] = "application/json"
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusBadRequest,
			Body:       "Invalid API Request",
			Headers:    headers,
		}, nil
	}
}
