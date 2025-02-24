package cmd

import (
	"fmt"

	"github.com/phurba-sherpa/task-management-backend/models"
	"github.com/rs/zerolog/log"
	"github.com/spf13/cobra"
)

var listCmd = &cobra.Command{
	Use:   "list",
	Short: "Lists all tasks",

	Run: func(cmd *cobra.Command, args []string) {
		// Set up zerolog with console writer
		var tasks []models.Task

		// Fetch tasks using models.GetAllTasks
		err := models.GetAllTasks(&tasks)
		if err != nil {
			log.Error().Err(err).Msg("Error fetching tasks")
			return
		}

		// Print tasks
		if len(tasks) == 0 {
			log.Info().Msg("No tasks found!")
			return
		}

		for _, task := range tasks {
			fmt.Printf("| %d | %-55s | %-11s |\n", task.ID, task.Title, task.Status)
		}
		fmt.Printf("Total records: %d", len(tasks))
	},
}

func init() {
	rootCmd.AddCommand(listCmd)
}
