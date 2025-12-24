# Parking Management System 🚗🅿️

**Parking Management System** is a lightweight full-stack application for managing vehicle entry/exit, payments, user authentication, and notifications (email). The backend is implemented with Node.js and Express; the front-end consists of simple static HTML/CSS pages.

---

## 📌 Features

- User signup & login
- Vehicle entry and exit recording
- Payment completion endpoint
- Email (and optionally SMS) notifications
- Simple front-end to interact with the backend

---

## 🧰 Tech Stack

- Node.js + Express
- MySQL (via `mysql2`)
- Nodemailer (email notifications)
- Twilio (SMS notifications — optional)
- Frontend: static HTML/CSS

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v14+)
- npm
- MySQL server (or any compatible MySQL instance)

### Install dependencies

```bash
npm install
```

### Database

Create the database used by the project (default name used in code: `parking_db`):

```sql
CREATE DATABASE parking_db;
```

You can either fill in the DB connection details in `backend/config/db.js` (the file currently contains placeholders) or modify it to read environment variables.

Example `.env` file (recommended):

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=parking_db

# Email (nodemailer) settings
EMAIL_HOST=smtp.example.com
EMAIL_USER=your@example.com
EMAIL_PASS=your-email-password

# Twilio (if used)
TWILIO_SID=your_twilio_sid
TWILIO_TOKEN=your_twilio_token
TWILIO_FROM=+1234567890
```

> Note: The project already requires `dotenv` in `app.js`. You may want to update `backend/config/db.js` to use `process.env.DB_*` values instead of hardcoding credentials.

### Run the app

- Development (auto-restart with `nodemon`):

```bash
npm run dev
```

- Production:

```bash
npm start
```

The server listens on port 5000 by default (see `app.js`).

---

## 🔌 API Endpoints

Base URL: `http://localhost:5000`

### Auth
- POST `/auth/signup` — register a new user
- POST `/auth/login` — user login

### Parking
- POST `/parking/entry` — record vehicle entry
- POST `/parking/exit` — record vehicle exit
- POST `/parking/complete-payment` — mark payment complete and trigger notifications

(See `backend/routes` and `backend/controllers` for controller logic and expected request bodies.)

---

## 🧪 Frontend

Frontend files are in the `frontend/` folder:
- `index.html` — landing or main page
- `signup.html` — registration page
- `dashboard.html` — simple dashboard
- `style.css` — styles

You can open these files directly in the browser or use Live Server (VS Code) to serve them and avoid CORS issues.

---

## ✅ Development Notes & Tips

- Update `backend/config/db.js` to use environment variables (recommended).
- Implement migrations/seeding if you plan to share the DB schema.
- Add authentication middleware and protect routes (e.g., `dashboard.html` APIs).
- Add tests and CI for reliability.

---

## 🤝 Contributing

Contributions are welcome — open an issue or submit a PR with a clear description of changes.

---

## 📄 License

Specify a license if you'd like to open-source this project (e.g., MIT).

---

If you want, I can:
- update `backend/config/db.js` to read from `.env` and add example `.env.example`;
- add SQL schema or a simple migration script;
- add a simple README badge and license file.

Tell me which of the above you'd like me to do next. 🙌
