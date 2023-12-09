package main

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
