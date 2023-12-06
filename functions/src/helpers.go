package main

import (
	"time"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/request"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

/** Create S3 session **/
func createSession() (*s3.S3, error) {
	_session, err := session.NewSession(&aws.Config{
		Region: aws.String(awsRegion),
	})
	if err != nil {
		return nil, err
	}
	return s3.New(_session), nil
}

/*
	Generates PreSigend URL for Clients (web and dashboard) to upload or download

files like audio and resume
*/
func preSignedURLGeneratorHelper(bucket string, objectKey string, action string) (string, error) {
	var req *request.Request
	svc, err := createSession()

	if err != nil {
		return "", err
	}
	if action == "download" {
		input := &s3.GetObjectInput{
			Bucket: aws.String(bucket),
			Key:    aws.String(objectKey),
		}

		req, _ = svc.GetObjectRequest(input)
	} else {

		input := &s3.PutObjectInput{
			Bucket: aws.String(bucket),
			Key:    aws.String(objectKey),
		}

		req, _ = svc.PutObjectRequest(input)
	}

	url, err := req.Presign(15 * time.Minute) // Presigned URL is valid for 15 minutes
	if err != nil {
		return "", err
	}

	return url, nil
}

/*
Reads Items in provided bucket  and return list Object Output
takes bucket name and prefix as inputs
*/
func readItemsFromBucketHelper(bucket string, folder string) (*s3.ListObjectsOutput, error) {
	svc, err := createSession()
	if err != nil {
		return nil, err
	}

	input := &s3.ListObjectsInput{
		Bucket: aws.String(storageBucket),
		Prefix: aws.String(folder + "/"),
	}
	result, err := svc.ListObjects(input)
	if err != nil {
		return nil, err
	}

	return result, nil

	// for _, item := range result.Contents {
	// 	halfByteBInfo = append(halfByteBInfo, HalfByteBInfo{
	// 		Name:         *item.Key,
	// 		Size:         *item.Size,
	// 		LastModified: item.LastModified.Format("2006-01-02T15:04:05Z07:00"),
	// 	})
	// }
	// return halfByteBInfo, nil
}
