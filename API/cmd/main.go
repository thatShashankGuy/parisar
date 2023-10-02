package main

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

type QueryForm struct {
	Query       string
	Name        string
	Email       string
	PhoneNumber string
	Location    string
}

type ResponseModel struct {
	Error bool   `json:"error"`
	Data  string `json:"data"`
}

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	router := mux.NewRouter()
	router.HandleFunc("/api/queryform", queryFormSubmissionHandler).Methods("POST")

	clientURL := os.Getenv("CLIENTURL")
	log.Println(clientURL)
	allowedOrigins := handlers.AllowedOrigins([]string{"*"}) //[]string{clientURL})
	allowedMethods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE"})
	corsHandler := handlers.CORS(allowedOrigins, allowedMethods)(router)

	port := ":8080"
	log.Printf("Server is running on port %s...\n", port)
	http.ListenAndServe(port, corsHandler)
}

func queryFormSubmissionHandler(w http.ResponseWriter, r *http.Request) {
	var queryform QueryForm

	body, err := io.ReadAll(r.Body)
	log.Println(body)
	if err != nil {
		log.Println(err)
		http.Error(w, "Bad Request : Error reading the Request body", http.StatusBadRequest)
		return
	}
	err = json.Unmarshal(body, &queryform)
	if err != nil {
		log.Println(err)
	}

	response := ResponseModel{
		Error: false,
		Data:  "Email Send Successfully",
	}

	jsonResponse, err := json.Marshal(response)
	if err != nil {
		log.Println(err)
		http.Error(w, "Internal Server Error : Error Parsing Response ", http.StatusInternalServerError)
	}
	log.Println(string(jsonResponse))
	w.WriteHeader(http.StatusOK)
	w.Write(jsonResponse)
}
