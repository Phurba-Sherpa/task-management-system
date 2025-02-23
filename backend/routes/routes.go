package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/phurba-sherpa/task-management-backend/controllers"
	"github.com/phurba-sherpa/task-management-backend/middleware"
)

func SetupRoutes() *gin.Engine {
	r := gin.Default()
	r.Use(middleware.CORSMiddleware())

	v1 := r.Group("/api/v1")
	{
		v1.GET("/ping", func(c *gin.Context) {
			c.JSON(200, gin.H{
				"message": "pong",
			})
		})
		v1.GET("tasks", controllers.GetAllTasks)
		v1.GET("tasks/:id", controllers.GetTaskById)
		v1.POST("tasks", controllers.AddNewTask)
		v1.PUT("tasks/:id", controllers.UpdateTask)
		v1.PUT("tasks/:id/status", controllers.UpdateTaskStatus)
		v1.DELETE("tasks/:id", controllers.DeleteTask)
	}

	return r

}
