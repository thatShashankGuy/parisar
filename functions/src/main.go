package main

import (
	"context"
	"net/http"
	"os"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

var (
	headers = map[string]string{
		"Access-Control-Allow-Origin":  "*",
		"Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type",
	}
	storageBucket = os.Getenv("STORAGE_BUCKET")
	audioFolder   = os.Getenv("AUDIO_ADDRESS")
	resumeKey     = os.Getenv("RESUME_KEY")
	awsRegion     = os.Getenv("MY_AWS_REGION")
)

func main() {
	lambda.Start(func(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
		switch request.Path {
		case "/portfolio/audiolog":
			return audioHandler(ctx, request)

		case "/portfolio/resume":
			return resumeHandler(ctx, request)

		case "/admin/audio":
			return getAudioInfoDashboardHandler(ctx, request)

		case "/admin/upload-url":
			return uploadAudioViaDashboardHandler(ctx, request)
		default:
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusBadRequest,
				Body:       "API Route Not Found",
				Headers:    headers,
			}, nil
		}
	})
}
