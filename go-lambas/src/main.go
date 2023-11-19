package main

import (
	"context"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func main() {
	lambda.Start(func(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
		if request.Path == "/triggerSMS" {
			return smsHandler(ctx, request)
		} else if request.Path == "/audiolog" {
			return audioHandler(ctx, request)
		} else {
			return events.APIGatewayProxyResponse{
				StatusCode: 404,
				Body:       "Not Found",
			}, nil
		}
	})
}
