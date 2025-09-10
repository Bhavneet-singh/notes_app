# 📝 Notes App – MERN Stack

A full-stack Notes Taking Application where users can register, log in securely using JWT, and manage their personal notes (Create, Read, Update, Delete).

---


## 🔧 Tech Stack

- **Frontend**: React.js, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js, MongoDB, JWT
- **Database**: MongoDB Atlas
---

**DEMO**





## 📦 Features

- ✨ User registration and secure login using JWT
- 🧾 Add, edit, delete, and list notes
- 🔒 Protected routes and note access per user
- 💾 JWT stored in `localStorage`
- 🎨 Responsive UI with Tailwind CSS
- 📁 Deployed on Render & Vercel

---

## 🗃️ Folder Structure

notes-app-mern/
│
├── backend/ # Node + Express backend
│ ├── controllers/ # Controllers for notes/auth
│ ├── models/ # Mongoose models
│ ├── routes/ # API routes
│ ├── middleware/ # JWT middleware
│ └── server.js # Entry point
│
└── frontend/ # React frontend
├── pages/ # Pages: Login, Register, Dashboard
├── components/ # Reusable components
├── contexts/ # Auth and Notes context
└── App.jsx # App entry

yaml
Copy
Edit

---

## ⚙️ Installation & Setup

### 1. Clone the Repo

```bash
git clone https://github.com/Bhavneet-singh/notes-app-mern.git
cd notes-app-mern
2. Setup Backend
bash
Copy
Edit
cd backend
npm install
Create a .env file:

env
Copy
Edit
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Run the backend:

bash
Copy
Edit
npm run dev
3. Setup Frontend
bash
Copy
Edit
cd ../frontend
npm install
Create a .env file:

env
Copy
Edit
VITE_API_BASE_URL=https://your-backend.onrender.com/api
Run the frontend:

bash
Copy
Edit
npm run dev
🛠 API Endpoints
Route	Method	Description
/api/auth/signup	POST	Register user
/api/auth/signin	POST	Login user
/api/note/	GET	Get all notes (auth)
/api/note/:id	GET	Get note by ID
/api/note/	POST	Create note
/api/note/:id	PUT	Update note
/api/note/:id	DELETE	Delete note

Push backend to a GitHub repo


Set environment variables (.env)

Use npm run dev or node server.js as start command


🙌 Author
Made with ❤️ by Bhavneet Singh

