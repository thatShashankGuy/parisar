package main

import (
	"fmt"
	"log"
	"os"
	"time"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

/*
*
generate and serve Audio Presigned URL to download and listen to audio on client
*
*/
func getPresignedURLForAudioPlayer(bucketName string, objectKey string) (string, error) {
	_session, err := session.NewSession(&aws.Config{
		Region: aws.String(os.Getenv("MY_AWS_REGION")),
	})

	if err != nil {
		log.Println("error in audioGET line 60")
		log.Println(err)
		return "", err
	}

	svc := s3.New(_session)

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

/*
*
generate and serve Presigned Url to download Resume at Client from S3
*
*/
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

/*
*
Generate and serve a dynamic URL from admin dashboard to upload audio to bucket
*
*/
func generatePreSignedURLForUpload(bucketName string, objectKey string) (string, error) {
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
