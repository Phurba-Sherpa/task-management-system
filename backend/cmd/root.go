/*
Copyright © 2025 PHURBA SHERPA <phurba1404@gmail.com>
*/

package cmd

import (
	"fmt"
	"os"

	"github.com/phurba-sherpa/task-management-backend/config"
	"github.com/phurba-sherpa/task-management-backend/db"
	"github.com/phurba-sherpa/task-management-backend/models"
	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:   "task-management-backend",
	Short: "A CLI tool for managing tasks",
	PersistentPreRun: func(cmd *cobra.Command, args []string) {
		cfg := config.LoadConfig()
		db.InitDB(cfg)
		db.DB.AutoMigrate(&models.Task{})

		fmt.Println("Database initialized for CLI commands")
	},
}

func Execute() {
	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}

func init() {
	rootCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
