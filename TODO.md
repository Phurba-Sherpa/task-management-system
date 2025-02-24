## 1. Project Setup  
- [x] Initialize Go project  
- [x] Set up project folder structure  
- [x] Configure environment variables  

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
- [x] Create **PUT** task API (`/tasks/:id/status`)  

## 4. Logging (ZeroLog)  
### **Logging Implementation**  
- [x] Install and configure ZeroLog  
- [x] Implement request logging middleware  
- [x] Log database operations (**task creation, update, delete**)  

## 6. CLI Support  
### **Command-line Interface**  
- [x] Create CLI command to add a task  
- [x] Create CLI command to process tasks  
- [x] Create CLI command to list all tasks  
- [x] Create CLI command to start the REST API  

## 7. Additional Enhancements  
- [ ] Create a README with setup instructions  
