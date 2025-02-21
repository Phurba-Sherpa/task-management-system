package main

import (
	"github.com/phurba-sherpa/task-management-backend/db"
	"github.com/rs/zerolog/log"
)

func main () {
    log.Info().Msg("Starting server...")
    db.InitDB()
}
