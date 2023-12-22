package main

import (
	"context"
	"database/sql"
	"encoding/json"
	"log"

	"github.com/aws/aws-sdk-go-v2/config"
	_ "github.com/go-sql-driver/mysql"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/secretsmanager"
)

/*Database connector*/
func databaseConnector() (*sql.DB, error) {
	secretString := secretManagerConnector()
	var secret SecretInfo
	json.Unmarshal([]byte(secretString), &secret)

	db, err := sql.Open("mysql", secret.DSN)
	if err != nil {
		log.Fatalf("failed to connect: %v", err)
		return nil, err
	}

	if err := db.Ping(); err != nil {
		log.Fatalf("failed to ping: %v", err)
		return nil, err
	}

	return db, nil

}

/* Secret manager Connectors*/
func secretManagerConnector() string {
	secretName := "planetscalesecret"
	region := "ap-south-1"

	config, err := config.LoadDefaultConfig(context.TODO(), config.WithRegion(region))
	if err != nil {
		log.Fatal(err)
	}

	// Create Secrets Manager client
	svc := secretsmanager.NewFromConfig(config)

	input := &secretsmanager.GetSecretValueInput{
		SecretId:     aws.String(secretName),
		VersionStage: aws.String("AWSCURRENT"), // VersionStage defaults to AWSCURRENT if unspecified
	}

	result, err := svc.GetSecretValue(context.TODO(), input)
	if err != nil {
		// For a list of exceptions thrown, see
		// https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
		log.Fatal(err.Error())
	}

	// Decrypts secret using the associated KMS key.
	var secretString string = *result.SecretString

	return secretString
}
