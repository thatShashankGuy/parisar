package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/aws/aws-lambda-go/events"
)

/*
*
request audio from s3 to download and listen
Have Get and Options
*
*/
func audioHandler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	switch request.HTTPMethod {
	case "GET":
		logId := request.QueryStringParameters["logId"]
		bucketName := os.Getenv("STORAGE_BUCKET")
		audioFolder := os.Getenv("AUDIO_ADDRESS")
		objectKey := fmt.Sprintf("%s/%s.mp3", audioFolder, logId)
		log.Println(objectKey)
		preSignedURL, err := getPresignedURLForAudioPlayer(bucketName, objectKey)
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
		headers["Content-Type"] = "application/json"
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

/*
*
request resume from s3 to download
Have Get and Options
*
*/
func resumeHandler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
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

/*
*
Upload Audio to S3 from client
Have Post and Options
*
*/
func uploadAudioViaDashboardHandler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

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
		preSignedURL, err := generatePreSignedURLForUpload(bucketName, audioFolder)
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

/*
*
get info on all audio stored in s3 as json
Have Get and Options
*
*/
func audioInfoDashboardHandler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
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
