/*
Copyright © 2025 PHURBA SHERPA <phurba1404@gmail.com>
*/
package cmd

import (
	"fmt"
	"strings"

	"github.com/phurba-sherpa/task-management-backend/models"
	"github.com/rs/zerolog/log"
	"github.com/spf13/cobra"
)

// addCmd represents the add command
var addCmd = &cobra.Command{
	Use:   "add",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,

	Run: func(cmd *cobra.Command, args []string) {

		if len(args) < 1 {
			fmt.Println("Usage: ./task_manager add <task-name>")
			return
		}

		title := strings.TrimSpace(args[0])

		// Validate task name
		if title == "" {
			fmt.Println("Task name missing")
			return
		}

		// Create a new task
		newTask := models.Task{
			Title:  title,
			Status: "TODO",
		}

		if err := models.AddNewTask(&newTask); err != nil {
			log.Err(err).Msg("❌ Failed to add task")
			return
		}

		fmt.Print("✅ Task add successful\n")
		fmt.Printf("| %d | %-55s | %-11s |\n", newTask.ID, newTask.Title, newTask.Status)
	},
}

func init() {
	rootCmd.AddCommand(addCmd)
}
