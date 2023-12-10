package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/aws/aws-lambda-go/events"
)

func vartalaapHandler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

	switch request.HTTPMethod {
	case "GET":
		logId := request.QueryStringParameters["logId"]
		objectKey := fmt.Sprintf("%s/%s.mp3", vartalaapFolder, logId)

		preSignedURL, err := preSignedURLGeneratorHelper(storageBucket, objectKey, "download")
		if err != nil {
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusInternalServerError,
				Body:       err.Error(),
			}, err
		}
		responseBody, err := json.Marshal(PresignedURLAudioResponse{URL: preSignedURL.URL})
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

func resumeHandler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	switch request.HTTPMethod {
	case "OPTIONS":
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusOK,
			Headers:    headers,
			Body:       "Handled OPTIONS",
		}, nil
	case "GET":
		objectKey := documentFolder + "/Resume.pdf"
		preSignedURL, err := preSignedURLGeneratorHelper(storageBucket, objectKey, "download")
		if err != nil {

			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusInternalServerError,
				Body:       err.Error(),
			}, err
		}

		responseBody, err := json.Marshal(PresignedURLResumeResponse{URL: preSignedURL.URL})
		if err != nil {
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusInternalServerError,
				Body:       err.Error(),
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

func uploadvartalaapViaDashboardHandler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {

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

		vartalaapFolder := vartalaapFolder + "/" + req.FileName
		preSignedURL, err := preSignedURLGeneratorHelper(storageBucket, vartalaapFolder, "upload")
		if err != nil {
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusInternalServerError,
				Headers:    headers,
				Body:       err.Error(),
			}, nil
		}
		responseBody, err := json.Marshal(uploadURLResponse{URL: preSignedURL.URL})
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
Handler to provide Half-byte Broadcast audio files to front
*/
func vartalaapInfoDashboardHandler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	switch request.HTTPMethod {
	case "GET":

		folder := vartalaapFolder
		hbb_result, err := readItemsFromBucketHelper(storageBucket, folder)
		if err != nil {
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusInternalServerError,
				Headers:    headers,
				Body:       err.Error(),
			}, nil
		}

		jsonResp, err := json.Marshal(hbb_result)

		if err != nil {
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusInternalServerError,
				Headers:    headers,
				Body:       err.Error(),
			}, nil
		}
		headers["Content-Type"] = "application/json"

		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusOK,
			Headers:    headers,
			Body:       string(jsonResp),
		}, nil

	case "OPTIONS":
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

func feedbackHandler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	switch request.HTTPMethod {
	case "OPTIONS":
		headers["Content-Type"] = "application/json"
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusOK,
			Headers:    headers,
			Body:       "Handled POST",
		}, nil
	case "POST":
		headers["Content-Type"] = "application/json"
		log.Println(request.Body)
		var feedbackObj Feedback
		err := json.Unmarshal([]byte(request.Body), &feedbackObj)

		if err != nil {
			log.Fatalf("failed to add marsh feedback json : %v", err)
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusInternalServerError,
				Headers:    headers,
				Body:       err.Error(),
			}, nil
		}
		_, err = add_feedback(feedbackObj)
		if err != nil {
			log.Fatalf("failed to add feedback: %v", err)
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusInternalServerError,
				Headers:    headers,
				Body:       err.Error(),
			}, nil
		}

		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusOK,
			Headers:    headers,
			Body:       "Feedback Added Successfully",
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
