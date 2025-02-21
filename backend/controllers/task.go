package controllers

import (
	"github.com/gin-gonic/gin"
	apihandlers "github.com/phurba-sherpa/task-management-backend/api-handlers"
	"github.com/phurba-sherpa/task-management-backend/models"
	"github.com/rs/zerolog/log"
)

func GetAllTasks(c *gin.Context) {
	var tasks []models.Task
	err := models.GetAllTasks(&tasks)
	if err != nil {
		log.Error().Err(err).Msg("Failed to fetch tasks")
		apihandlers.RespondJSON(c, 404, tasks, "Failed to fetch tasks, something went wrong!")
	} else {
		log.Info().Interface("tasks", tasks).Msg("Fetched tasks")
		apihandlers.RespondJSON(c, 200, tasks, "Records fetched successfully!")
	}
}

func AddNewTask(c *gin.Context) {
	var task models.Task
	c.BindJSON(&task)
	err := models.AddNewTask(&task)
	if err != nil {
		log.Error().Err(err).Msg("Failed to add task")
		apihandlers.RespondJSON(c, 400, task, "Failed to save task!")
	} else {
		log.Info().Interface("task", task).Msg("Successfully saved task")
		apihandlers.RespondJSON(c, 200, task, "Task saved successfully!")
	}
}

func GetTaskById(c *gin.Context) {
	id := c.Params.ByName("id")
	var task models.Task
	err := models.GetTaskById(&task, id)
	if err != nil {
		log.Error().Err(err).Str("task_id", id).Msg("Failed to fetch task")
		apihandlers.RespondJSON(c, 404, nil, "Task not found!")
	} else {
		log.Info().Interface("tasks", task).Msg("Fetched task")
		apihandlers.RespondJSON(c, 200, task, "Task successfully fetched!")
	}
}

func UpdateTask(c *gin.Context) {
	var task models.Task
	id := c.Params.ByName("id")
	err := models.GetTaskById(&task, id)
	if err != nil {
		apihandlers.RespondJSON(c, 404, task, "Task doesnt exist!")
	}
	c.BindJSON(&task)
	err = models.UpdateTask(&task, id)
	if err != nil {
		apihandlers.RespondJSON(c, 400, task, "Task update failed!")
	} else {
		apihandlers.RespondJSON(c, 200, task, "Task successfully updated!")
	}
}

func DeleteTask(c *gin.Context) {
	var task models.Task
	id := c.Params.ByName("id")

	err := models.DeleteTask(&task, id)
	if err != nil {
		apihandlers.RespondJSON(c, 400, task, "Task deletion failed")
	} else {
		apihandlers.RespondJSON(c, 200, task, "Task successfully deleted")
	}
}
