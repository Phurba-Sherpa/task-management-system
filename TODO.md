## 1. Project Setup  
- [x] Initialize Go project  
- [x] Set up project folder structure  
- [ ] Configure environment variables  

## 2. Database (SQLite + GORM)  
### **Install and Configure**  
- [ ] Install and configure GORM with SQLite  
- [ ] Create Task model (`id, title, status, created_at, updated_at`)  
- [ ] Implement task migrations using GORM  

## 3. REST API (Gin)  
### **Task API Endpoints**  
- [ ] Create **GET** all tasks API (`/tasks`)  
- [ ] Create **GET** task by ID API (`/tasks/:id`)  
- [ ] Create **POST** task API (`/tasks`)  
- [ ] Create **PUT** task API (`/tasks/:id`)  
- [ ] Create **DELETE** task API (`/tasks/:id`)  

## 4. Logging (ZeroLog)  
### **Logging Implementation**  
- [ ] Install and configure ZeroLog  
- [ ] Implement request logging middleware  
- [ ] Log database operations (**task creation, update, delete**)  

## 5. Concurrency (Goroutines)  
### **Background Task Processing**  
- [ ] Implement task processor using Goroutines  
- [ ] Use channels to manage background task processing  

## 6. CLI Support  
### **Command-line Interface**  
- [ ] Create CLI command to add a task  
- [ ] Create CLI command to process tasks  
- [ ] Create CLI command to list all tasks  
- [ ] Create CLI command to start the REST API  

## 7. Additional Enhancements  
- [ ] Create a README with setup instructions  
