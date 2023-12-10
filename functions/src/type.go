package main

import "fmt"

type uploadURLResponse struct {
	URL string `json:"url"`
}

type uploadURLRequestBody struct {
	FileName string `json:"fileName"`
}

type PresignedURLAudioResponse struct {
	URL string `json:"url"`
}

type PresignedURLResumeResponse struct {
	URL string `json:"url"`
}

type VartalaapInfo struct {
	Name         string `json:"name"`
	Size         int64  `json:"size"`
	LastModified string `json:"last_modified"`
}

type SecretInfo struct {
	DSN string `json:"DSN"`
}

type Feedback struct {
	Comment string `json:"comment"`
	Email   string `json:"email"`
	Source  string `json:"source"`
}

type VartalaapIndex struct {
	SerialNo  string `json:"logId"`
	EpisodeId string `json:"EpisodeId"`
	Name      string `json:"Name"`
}

type CustomError struct {
	message string
}

func (E CustomError) Error() string {
	return fmt.Sprintf("error : %s", E.message)
}
