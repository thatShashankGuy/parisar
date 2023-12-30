package main

import (
	v4 "github.com/aws/aws-sdk-go-v2/aws/signer/v4"
	_ "github.com/go-sql-driver/mysql"
)

/*
	Generates PreSigend URL for Clients (web and dashboard) to upload or download

files like audio and resume
*/
func preSignedURLGeneratorHelper(bucket string, objectKey string, action string) (*v4.PresignedHTTPRequest, error) {
	var req *v4.PresignedHTTPRequest
	var err error
	const lifetime = 10

	if action == "download" {

		req, err = svc.GeneratePreSignedURLToGetObjects(bucket, objectKey, lifetime)

		if err != nil {
			return nil, err
		}
	} else {

		req, err = svc.GeneratePreSignedURLToPutObjects(bucket, objectKey, lifetime)

		if err != nil {
			return nil, err
		}
	}

	return req, nil
}

/*
Reads Items in provided bucket  and return list Object Output
takes bucket name and prefix as inputs
*/
func readItemsFromBucketHelper(bucket string, folder string) ([]AudioInfo, error) {
	var vartalaapInfo []AudioInfo
	folder = folder + "/"
	result, err := svc.ListObjects(bucket, folder)
	if err != nil {
		return nil, err
	}

	for _, item := range result {
		vartalaapInfo = append(vartalaapInfo, AudioInfo{
			Name:         *item.Key,
			Size:         *item.Size,
			LastModified: item.LastModified.Format("2006-01-02T15:04:05Z07:00"),
		})
	}

	return vartalaapInfo, nil
}
