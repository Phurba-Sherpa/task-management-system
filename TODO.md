## 1. Project Setup  
- [x] Initialize Go project  
- [x] Set up project folder structure  
- [ ] Configure environment variables  

## 2. Database (SQLite + GORM)  
### **Install and Configure**  
- [x] Install and configure GORM with SQLite  
- [x] Create Task model (`id, title, status, created_at, updated_at`)  
- [x] Implement task migrations using GORM  

## 3. REST API (Gin)  
### **Task API Endpoints**  
- [x] Create **GET** all tasks API (`/tasks`)  
- [x] Create **GET** task by ID API (`/tasks/:id`)  
- [x] Create **POST** task API (`/tasks`)  
- [x] Create **PUT** task API (`/tasks/:id`)  
- [x] Create **DELETE** task API (`/tasks/:id`)  

## 4. Logging (ZeroLog)  
### **Logging Implementation**  
- [x] Install and configure ZeroLog  
- [ ] Implement request logging middleware  
- [x] Log database operations (**task creation, update, delete**)  

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
