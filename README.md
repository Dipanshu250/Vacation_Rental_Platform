# 🏡 Vacation Rental Platform

A simple Airbnb-style web application where users can browse rentals, create listings, write reviews, and manage sessions (signup/login/logout).  
Built with **Node.js, Express, EJS, MongoDB**, and vanilla **HTML/CSS/JS**.

---

## ✨ Features
- **Listings**: Create, read, update, and delete vacation rentals  
- **Reviews**: Add ratings & comments for listings  
- **Authentication**: Sign up, login, logout (session-based)  
- **Server-rendered UI** using EJS templates  
- **Validation & Middleware** for secure and clean inputs  
- **Responsive Design** for mobile and desktop  

---

## 🛠 Tech Stack
**Frontend:** HTML5, CSS3, JavaScript, EJS  
**Backend:** Node.js, Express  
**Database:** MongoDB (Mongoose)  
**Other:** Express Session, Middleware Utilities  

---

## 🚀 Getting Started

### 1️⃣ Prerequisites
- Node.js (LTS recommended)
- MongoDB (Atlas or Local)

### 2️⃣ Environment Variables
Create a `.env` file in the root directory:
```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/vacation_rentals
SESSION_SECRET=supersecret_session_key

.
├─ classroom/                # Demo / training code
├─ controllers/              # Route handlers (listings, reviews, auth)
├─ init/                     # DB connection / seed scripts
├─ models/                   # Mongoose schemas & models
├─ public/                   # Static assets (css, js, images)
├─ routes/                   # Express routers
├─ utils/                    # Helper functions, middleware
├─ views/                    # EJS templates
├─ appli.js                  # Main Express app
├─ middlewares.js            # Custom middleware
├─ schema.js                 # Joi/validator schemas
├─ package.json
└─ README.md
