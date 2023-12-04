package main

import (
	"context"
	"net/http"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

var headers = map[string]string{
	"Access-Control-Allow-Origin":  "*",
	"Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type",
}

func main() {
	lambda.Start(func(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
		switch request.Path {
		case "/audiolog":
			return audioHandler(ctx, request)

		case "/resume":
			return resumeHandler(ctx, request)

		case "/admin/audio/":
			return audioDashboardHandler(ctx, request)

		case "/admin/upload-url":
			return uploadURLHandler(ctx, request)
		default:
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusBadRequest,
				Body:       "API Route Not Found",
				Headers:    headers,
			}, nil
		}
	})
}
