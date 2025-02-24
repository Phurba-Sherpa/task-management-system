# Project Setup

This repository contains a **frontend** built with Vite + TypeScript and a **backend** 
built with Golang (using SQLite as the database).

## Prerequisites

- **Node.js** (Latest LTS recommended)
- **Go** (1.20+ recommended)
- **Make** (Optional, for running commands easily)

---

## 🚀 Setup Guide

### 1️⃣ Clone the repository  
```sh
git clone https://github.com/phurba-sherpa/task-management-system.git
cd task-management-system
```

---

## 🏗 Backend Setup (Golang + SQLite)

### 2️⃣ Navigate to the backend folder
```sh
cd backend
```

### 3️⃣ Initialize environment variables  
No env required for backend, since default sqlite path used
same for server port default 8080 used

### 4️⃣ Install dependencies  
```sh
go mod tidy
```

### 5️⃣ Run database migrations  
💡No migration step is required, the database will be automatically created when you run the backend.
or cli 

### 6️⃣ Start the backend server  
```sh
go run main.go api
```
or build and run:
```sh
go build -o task_manager.exe main.go
./task_manager.exe api
```

---

## 🎨 Frontend Setup (Vite + TypeScript)

### 7️⃣ Navigate to the frontend folder  
```sh
cd ../frontend
```

### 8️⃣ Install dependencies  
```sh
npm install or npm install -f
```

### 9️⃣ Start the development server  
```sh
npm run dev
```

## 📂 Project Structure

```
phurba-sherpa/
│── backend/       # Golang backend
│── frontend/      # Vite + TypeScript frontend
│── .gitignore
│── TODO.md
│── README.md
```

---

## 🛠 Troubleshooting

- If you are not able to run the cli command make sure the build has `.exe` extension:
  ```sh
  go build -o task_manager.exe main.go


