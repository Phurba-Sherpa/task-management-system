package apihandlers

import (
	"github.com/gin-gonic/gin"
)

type ResponseData struct {
	Status    int    `json:"status"`
	Data      any    `json:"data"`
	StatusMsg string `json:"statusMsg"`
}

func RespondJSON(w *gin.Context, status int, payload any, statusMsg string) {
	var res ResponseData

	res.Status = status
	res.Data = payload
	res.StatusMsg = statusMsg

	w.JSON(200, res)
}
