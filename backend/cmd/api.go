/*
Copyright © 2025 PHURBA SHERPA <phurba1404@gmail.com>
*/

package cmd

import (
	"github.com/phurba-sherpa/task-management-backend/server"
	"github.com/rs/zerolog/log"
	"github.com/spf13/cobra"
)

// apiCmd represents the api command
var apiCmd = &cobra.Command{
	Use:   "api",
	Short: "A command to start the application server ",
	Run: func(cmd *cobra.Command, args []string) {
		log.Info().Msg("Starting API server..")
		server.StartServer()
	},
}

func init() {
	rootCmd.AddCommand(apiCmd)
}
