# 📝 Blog App — Laravel API + React.js

A simple blog application demonstrating full **CRUD** (Create, Read, Update, Delete) functionality. The backend is built with **Laravel REST API**, and the frontend is developed using **React.js**.

---

## 🚀 Features

- Create, Read, Update, and Delete blog posts
- RESTful API built with Laravel
- SPA frontend with React.js
- Responsive UI (using Tailwind CSS)
- Basic validation and error handling

---

## 🛠️ Tech Stack

### Backend
- [Laravel 12](https://laravel.com/)
- [Laravel Sanctum](https://laravel.com/docs/sanctum)
- SQLite

### Frontend
- [React.js](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📁 Folder Structure

```
/backend       # Laravel API
/frontend      # React App
```

---

## 🧰 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/laravel-react-blog-app.git
cd laravel-react-blog-app
```

---

### 2. Backend Setup (Laravel API)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
```

- Configure `.env` with your database settings.

```bash
php artisan migrate
php artisan serve
```

> API will be running on: `http://127.0.0.1:8000`

---

### 3. Frontend Setup (React)

```bash
cd ../frontend
npm install
npm run dev
```

> React app will be running on: `http://localhost:5173`

---

## 📡 API Endpoints

| Method | Endpoint        | Description        |
|--------|------------------|--------------------|
| GET    | /api/posts       | List all posts     |
| GET    | /api/posts/{id}  | Show single post   |
| POST   | /api/posts       | Create new post    |
| PUT    | /api/posts/{id}  | Update a post      |
| DELETE | /api/posts/{id}  | Delete a post      |

---

