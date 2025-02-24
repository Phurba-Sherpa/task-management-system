/*
Copyright © 2025 NAME HERE <EMAIL ADDRESS>
*/
package cmd

import (
	"fmt"

	"github.com/phurba-sherpa/task-management-backend/db"
	"github.com/phurba-sherpa/task-management-backend/models"
	"github.com/rs/zerolog/log"
	"github.com/spf13/cobra"
)

/*
for batch we can do `process --all`,
since requirement isnt clear so single processing will be
done, status TODO, and the oldest one
*/
var processCmd = &cobra.Command{
	Use:   "process",
	Short: "Process a single task that is in TODO state",
	Run: func(cmd *cobra.Command, args []string) {
		var task2beProcessed models.Task
		err := db.DB.Where("status = ?", "TODO").First(&task2beProcessed).Error
		if err != nil {
			log.Info().Msg("No tasks available to process.")
			return
		}

		// Mark the task as completed
		task2beProcessed.Status = "DONE"
		if err := db.DB.Save(&task2beProcessed).Error; err != nil {
			log.Error().Err(err).Msg("Failed to update task status.")
			return
		}

		fmt.Print("Process status: DONE ✅\n")
		fmt.Print("Process task:\n")
		fmt.Printf("| %d | %-55s | %-11s |\n", task2beProcessed.ID, task2beProcessed.Title, task2beProcessed.Status)
	},
}

func init() {
	rootCmd.AddCommand(processCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// processCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// processCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
