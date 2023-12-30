package main

import (
	"fmt"
)

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

type AudioInfo struct {
	Name         string `json:"name"`
	Size         int64  `json:"size"`
	LastModified string `json:"last_modified"`
}

type SecretInfo struct {
	DSN string `json:"DSN"`
}

type Feedback struct {
	Comment   string `json:"comment"`
	Email     string `json:"email"`
	Source    string `json:"source"`
	CreatedAt string `json:"createdAt"`
	UpdatedAt string `json:"updatedAt"`
}

type AudioIndex struct {
	SerialNo  string `json:"logId"`
	EpisodeId string `json:"episodeId"`
	Name      string `json:"name"`
}

type CustomError struct {
	message string
}

func (E CustomError) Error() string {
	return fmt.Sprintf("error : %s", E.message)
}

type Blogs struct {
	Title   string `json:"title"`
	Author  string `json:"Author"`
	Link    string `json:"link"`
	Date    string `json:"date"`
	Content string `json:"content"`
}
