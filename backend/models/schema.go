package models

type TaskStatus string

const (
	ToDo       TaskStatus = "TODO"
	InProgress TaskStatus = "IN PROGRESS"
	Done       TaskStatus = "DONE"
	Blocked    TaskStatus = "ON HOLD"
)

// Task represents a task in the system
type Task struct {
	ID          uint       `gorm:"primaryKey" json:"id"`
	Title       string     `json:"title"`
	Description string     `json:"description"`
	Status      TaskStatus `gorm:"type:text;default:TODO" json:"status"`
	CreatedAt   int64      `gorm:"autoCreateTime:milli" json:"createdAt"`
	UpdatedAt   int64      `gorm:"autoUpdateTime:milli" json:"updatedAt"`
}

func (t *Task) TableName() string {
	return "task"
}
