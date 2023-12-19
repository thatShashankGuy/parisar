package dashboard

import (
	"bufio"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strings"
)

func main() {
	fmt.Println(`
	Dashboard CLI Booted
	`)
	fmt.Println(`Provide a command or type help for cli commands.Type "q" to exit the CLI`)
	commandCenter()

}

func commandCenter() {
	reader := bufio.NewReader(os.Stdin)
	Input, err := reader.ReadString('\n')
	Input = strings.TrimSpace(Input)
	if err != nil {
		panic(err)
	}

	switch Input {
	case "q":
		fmt.Println("Thank you for using dashboard")
		return
	case "help":
		fmt.Println(`
		Select Option Number for menu
		1. Show Feedback : ls feed
		2. Upload New Audio  : sync aud
		3. Upload Metadata : sync meta
		4. List All Audio Files : ls aud
		5. List All Audio Files Metadata : ls meta
		`)

		commandCenter()
	case "ls feed":
		readAllFeedback()
		commandCenter()
	case "sync aud":
		fmt.Println("To be constructed")
		commandCenter()
	case "sync meta":
		fmt.Println("To be constructed")
		commandCenter()
	case "ls aud":
		fmt.Println("To be constructed")
		commandCenter()
	case "ls meta":
		fmt.Println("To be constructed")
		commandCenter()

	default:
		fmt.Println("Invalid Input")
		commandCenter()
	}
}

func uploadAudioViaAPI() {
	fmt.Println("Provide Path of the file ")
	reader := bufio.NewReader(os.Stdin)
	Input, err := reader.ReadString('\n')
	Input = strings.TrimSpace(Input)

	if err != nil {
		panic(err)
	}
}

func readAllFeedback() {
	apiURL := "http://localhost:3000/admin/v1/feedback"

	client := http.Client{}

	resp, err := client.Get(apiURL)

	if err != nil {
		log.Fatalf("error occurred while reading feedback %v", err)
		commandCenter()
	}

	body, err := io.ReadAll(resp.Body)
	data := string(body)
	if err != nil {
		log.Fatalf("error occurred while reading feedback %v", err)
		commandCenter()
	}
	if data == "null" {
		fmt.Println("no data to show")
	} else {
		fmt.Println(string(body))
	}

}
