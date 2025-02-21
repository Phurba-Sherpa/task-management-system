package models

import (
	"github.com/phurba-sherpa/task-management-backend/db"
)

func GetAllTasks(t *[]Task) (err error) {
	if err = db.DB.Find(t).Error; err != nil {
		return err
	}
	return nil
}

func AddNewTask(t *Task) (err error) {
	if err = db.DB.Create(t).Error; err != nil {
		return err
	}
	return nil
}

func GetTaskById(t *Task, id string) (err error) {
	if err := db.DB.Where("id = ?", id).First(t).Error; err != nil {
		return err
	}
	return nil
}

func UpdateTask(t *Task, id string) (err error) {
	db.DB.Save(t)
	return nil
}

func DeleteTask(t *Task, id string) (err error) {
	db.DB.Where("id = ?", id).Delete(t)
	return nil
}
