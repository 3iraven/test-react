package main

import (
	"log"
	"os"
	"github.com/joho/godotenv"
	"yourproject/common" // replace with your actual project import path
	"yourproject/controller" // replace with your actual project import path
	"yourproject/repo" // replace with your actual project import path
	"yourproject/service" // replace with your actual project import path
)

func init() {
	// Load the .env file in the current directory
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}
}

func main() {
	// Instantiate the Yaml struct with values from the .env file
	config := common.Yaml{
		Mssql: common.Mssql{
			Hostname: os.Getenv("MSSQL_HOSTNAME"),
			Port:     os.Getenv("MSSQL_PORT"),
			Username: os.Getenv("MSSQL_USERNAME"),
			Password: os.Getenv("MSSQL_PASSWORD"),
			Database: os.Getenv("MSSQL_DATABASE"),
		},
		Echo: common.Echo{
			Port: os.Getenv("ECHO_PORT"),
		},
	}

	// Use config in the rest of your application as needed
	repoFactory, err := repo.GetRepoFactory(&config)
	if err != nil {
		log.Fatal(err)
	}
	defer repoFactory.Close()

	serviceFactory := service.GetServiceFactory(repoFactory)

	echo := controller.InitController(serviceFactory)
	echo.Logger.Fatal(echo.Start(config.Echo.Port))
}
