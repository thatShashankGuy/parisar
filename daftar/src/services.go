package main

import (
	"context"
	"log"
	"time"

	"github.com/aws/aws-sdk-go-v2/aws"
	v4 "github.com/aws/aws-sdk-go-v2/aws/signer/v4"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/aws/aws-sdk-go-v2/service/s3/types"
)

type AWS_S3 struct {
	PresignClient *s3.PresignClient
	S3Client      *s3.Client
}

var svc AWS_S3

func loadConfig() (aws.Config, error) {
	cfg, err := config.LoadDefaultConfig(
		context.TODO(),
		config.WithRegion(awsRegion),
	)
	if err != nil {
		log.Printf("Error loading AWS configuration: %v\n", err)
		return cfg, err
	}
	return cfg, nil
}

func (svc AWS_S3) GeneratePreSignedURLToGetObjects(
	bucketName string, objectKey string, lifetimeSecs int64) (*v4.PresignedHTTPRequest, error) {
	cfg, err := loadConfig()
	if err != nil {
		log.Println("Configuration session failed\n", err)
		return nil, err
	}
	s3Client := s3.NewFromConfig(cfg)
	svc.PresignClient = s3.NewPresignClient(s3Client)
	if svc.PresignClient == nil {
		log.Panicln("PresginClient is nil")
	}
	request, err := svc.PresignClient.PresignGetObject(context.TODO(), &s3.GetObjectInput{
		Bucket: aws.String(bucketName),
		Key:    aws.String(objectKey),
	}, func(opts *s3.PresignOptions) {
		opts.Expires = time.Duration(lifetimeSecs * int64(time.Second))
	})
	if err != nil {
		log.Printf("Couldn't get a presigned request to get %v:%v. Here's why: %v\n",
			bucketName, objectKey, err)
	}
	return request, err
}

func (svc AWS_S3) GeneratePreSignedURLToPutObjects(
	bucketName string, objectKey string, lifetimeSecs int64) (*v4.PresignedHTTPRequest, error) {
	cfg, err := loadConfig()
	if err != nil {
		log.Println("Configuration session failed\n", err)
		return nil, err
	}
	s3Client := s3.NewFromConfig(cfg)
	svc.PresignClient = s3.NewPresignClient(s3Client)
	request, err := svc.PresignClient.PresignPutObject(context.TODO(), &s3.PutObjectInput{
		Bucket: aws.String(bucketName),
		Key:    aws.String(objectKey),
	}, func(opts *s3.PresignOptions) {
		opts.Expires = time.Duration(lifetimeSecs * int64(time.Second))
	})
	if err != nil {
		log.Printf("Couldn't get a presigned request to put %v:%v. Here's why: %v\n",
			bucketName, objectKey, err)
	}
	return request, err
}

func (svc AWS_S3) ListObjects(bucketName string, prefix string) ([]types.Object, error) {
	cfg, err := loadConfig()
	if err != nil {
		log.Println("Configuration session failed\n", err)
		return nil, err
	}
	svc.S3Client = s3.NewFromConfig(cfg)
	result, err := svc.S3Client.ListObjectsV2(context.TODO(), &s3.ListObjectsV2Input{
		Bucket: aws.String(bucketName),
		Prefix: aws.String(prefix),
	})
	var contents []types.Object
	if err != nil {
		log.Printf("Couldn't list objects in bucket %v. Here's why: %v\n", bucketName, err)
	} else {
		contents = result.Contents
	}
	return contents, err
}
