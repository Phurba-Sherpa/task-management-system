package main

import (
	"github.com/phurba-sherpa/task-management-backend/cmd"
	"github.com/phurba-sherpa/task-management-backend/db"
)

func main() {
	db.InitDB()
	cmd.Execute()
}
