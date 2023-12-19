package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	fmt.Println(`
	Dashboard CLI Booted
	`)
	fmt.Println(`Provide a command or type help for cli commands.Type "exit" to exit the CLI`)
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
	case "exit":
		fmt.Println("Thank you for using dashboard")
		return
	case "help":
		fmt.Println(`
		Select Option Number for menu
		1. Show Feedback : ls feedback
		2. Upload New Audio  : sync audio
		3. Upload Metadata : sync meta
		4. List All Audio Files : ls audio
		5. List All Audio Files Metadata : ls meta
		`)

		commandCenter()
	case "ls feedback":
		fmt.Println("To be constructed")
		commandCenter()
	case "sync audio":
		fmt.Println("To be constructed")
		commandCenter()
	case "sync meta":
		fmt.Println("To be constructed")
		commandCenter()
	case "ls audio":
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
