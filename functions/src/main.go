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
	storageBucket   = os.Getenv("STORAGE_BUCKET")
	vartalaapFolder = os.Getenv("AUDIO_ADDRESS")
	documentFolder  = os.Getenv("DOCS_ADDRESS")
	awsRegion       = os.Getenv("MY_AWS_REGION")
	applicationEnv  = os.Getenv("APP_ENV")
)

func main() {

	lambda.Start(func(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
		if applicationEnv == "PROD" {
			headers["Access-Control-Allow-Origin"] = "https://shashankshekhar.pages.dev"
		}

		switch request.Path {
		case "/api/v1/broadcast":
			return vartalaapHandler(ctx, request)

		case "/api/v1/resume":
			return resumeHandler(ctx, request)

		case "/api/v1/feedback":
			return feedbackHandler(ctx, request)

		case "/api/v1/episodelist":
			return vartalaapIndexHandler(ctx, request)

		case "/admin/v1/broadcast":
			return vartalaapInfoDashboardHandler(ctx, request)

		case "/admin/v1/upload-broadcast":
			return uploadvartalaapViaDashboardHandler(ctx, request)

		case "/admin/v1/feedback":
			return feedbackHandler(ctx, request)

		default:
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusBadRequest,
				Body:       "API Route Not Found",
				Headers:    headers,
			}, nil
		}
	})
}
