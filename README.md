# 🛒 Full Stack E-Commerce Application

A modern full-stack e-commerce web application built using React and a backend API. This project demonstrates core concepts of frontend development, state management, and API integration.

---

## 🧰 Tech Stack

### Frontend

* React (Vite)
* Redux Toolkit
* React Router
* Axios
* CSS

### Backend

* JSON Server (Mock API)

---

## ✨ Features

### 👤 User Features

* User Registration & Login UI
* Browse products
* Add to Cart
* View Cart
* Responsive design

### 🛠️ Admin Features

* Create new products
* View product details
* Manage product listings

---

## 📁 Project Structure

```
project/
│
├── backend/
│   ├── db.json
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── routes/
│   │   ├── api/
│   │
│   ├── package.json
│
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
npx json-server db.json
```

Backend runs at:

```
http://localhost:3000
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔗 API Configuration

Update API base URL in frontend:

```js
const API = "http://localhost:3000";
```

(Replace with deployed backend URL in production)

---

## 📌 Future Improvements

* 🔐 Add Authentication (JWT)
* 🗄️ Replace JSON Server with Express + MongoDB
* 💳 Add Payment Integration
* 📦 Order Management System
* 🔎 Search & Filter Products

---

## 💡 Learnings

* State management using Redux Toolkit
* API integration with Axios
* Routing with React Router
* Component-based architecture
* Full-stack project structuring

---

## 📄 License

This project is for educational purposes.

---

## 🙌 Author

**Ayush**
B.Tech IT Student | Aspiring Software Developer

---

⭐ If you like this project, give it a star!
