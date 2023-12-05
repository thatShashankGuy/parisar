package main

import (
	"time"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

/*
*
Create a AWS service session
*
*/
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
*
generate and serve Audio Presigned URL to download and listen to audio on client
*
*/
func getPresignedURLForAudioPlayer(objectKey string) (string, error) {

	svc, err := createSession()

	if err != nil {
		return "", err
	}

	input := &s3.GetObjectInput{
		Bucket: aws.String(storageBucket),
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
	svc, err := createSession()
	if err != nil {
		return "", err
	}
	input := &s3.GetObjectInput{
		Bucket: aws.String(storageBucket),
		Key:    aws.String(resumeKey),
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
func generatePreSignedURLForUpload(objectKey string) (string, error) {
	svc, err := createSession()
	if err != nil {
		return "", err
	}

	input := &s3.PutObjectInput{
		Bucket: aws.String(storageBucket),
		Key:    aws.String(objectKey),
	}

	req, _ := svc.PutObjectRequest(input)
	url, err := req.Presign(15 * time.Minute) // Presigned URL is valid for 15 minutes
	if err != nil {
		return "", err
	}

	return url, nil
}

/*
*
Get Audio file info ( name , size and date of upload) from S3 and return to frontend helper
*
*/
func getAudioInfoDashboard() ([]AudioInfo, error) {
	svc, err := createSession()
	if err != nil {
		return []AudioInfo{}, err
	}

	input := &s3.ListObjectsInput{
		Bucket: aws.String(storageBucket),
		Prefix: aws.String(audioFolder + "/"),
	}
	result, err := svc.ListObjects(input)
	if err != nil {
		return []AudioInfo{}, err
	}

	var audioInfo []AudioInfo

	for _, item := range result.Contents {
		audioInfo = append(audioInfo, AudioInfo{
			Name:         *item.Key,
			Size:         *item.Size,
			LastModified: item.LastModified.Format("2006-01-02T15:04:05Z07:00"),
		})
	}
	return audioInfo, nil
}
