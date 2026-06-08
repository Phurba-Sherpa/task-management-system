package server

import (
	"github.com/phurba-sherpa/task-management-backend/config"
	"github.com/phurba-sherpa/task-management-backend/db"
	"github.com/phurba-sherpa/task-management-backend/models"
	"github.com/phurba-sherpa/task-management-backend/routes"
	"github.com/rs/zerolog/log"
)

func StartServer() {
	log.Info().Msg("Starting server...")
	cfg := config.LoadConfig()
	db.InitDB(cfg)

	log.Info().Msg("Running migrations...")
	db.DB.AutoMigrate(&models.Task{})
	log.Info().Msg("Migrations complted!")

	r := routes.SetupRoutes()
	log.Info().Msg("Server started successfully!")
	r.Run()
}
