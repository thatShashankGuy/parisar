package main

import (
	"context"
	"io"
	"log"
	"net/http"
	"os"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

func fetchResumeFromS3() ([]byte, error) {
	sess := session.Must(session.NewSession())
	svc := s3.New(sess)
	bucketName := os.Getenv("STORAGE_BUCKET")
	objectKey := os.Getenv("RESUME_KEY")
	input := &s3.GetObjectInput{
		Bucket: aws.String(bucketName),
		Key:    aws.String(objectKey),
	}

	result, err := svc.GetObject(input)
	if err != nil {
		return nil, err
	}
	defer result.Body.Close()

	resume, err := io.ReadAll(result.Body)
	if err != nil {
		return nil, err
	}
	log.Println(resume)
	return resume, nil
}

func resumeHandler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	headers := map[string]string{
		"Access-Control-Allow-Origin":  "*",
		"Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type,Content-Disposition",
	}
	switch request.HTTPMethod {
	case "OPTIONS":
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusOK,
			Headers:    headers,
			Body:       "Handled OPTIONS",
		}, nil
	case "GET":
		pdfData, err := fetchResumeFromS3()
		if err != nil {
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusInternalServerError,
				Body:       "Failed to fetch PDF",
			}, err
		}

		headers["Content-Type"] = "application/pdf"
		headers["Content-Disposition"] = `attachment; filename="resume.pdf"`
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusOK,
			Headers:    headers,
			Body:       string(pdfData),
		}, nil
	default:
		return events.APIGatewayProxyResponse{
			Body:       "NO VALID REQUEST",
			Headers:    headers,
			StatusCode: http.StatusBadRequest,
		}, nil
	}
}
