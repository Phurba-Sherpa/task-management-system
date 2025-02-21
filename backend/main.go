package main

import (
	"github.com/phurba-sherpa/task-management-backend/db"
	"github.com/phurba-sherpa/task-management-backend/models"
	"github.com/phurba-sherpa/task-management-backend/routes"
	"github.com/rs/zerolog/log"
)

func main() {
	log.Info().Msg("Starting server...")
	db.InitDB()

	log.Info().Msg("Running migrations...")
	db.DB.AutoMigrate(&models.Task{})
	log.Info().Msg("Migrations complted!")

	r := routes.SetupRoutes()
	log.Info().Msg("Server started successfully!")
	r.Run()

}
