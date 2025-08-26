# Jatra Frontend

##  Live Deployment

[Visit Jatra Frontend](https://jatra-frontend.vercel.app)

---

##  Project Overview

**Jatra Frontend** is the client-side application of the Jatra platform. It is designed to provide a smooth, responsive, and user-friendly interface for travelers and ride-sharing users. The frontend communicates with the backend server through secured API calls and handles authentication, state management, and UI rendering.

---

##  Features

*  **Authentication System** – Secure login and signup with JWT.
*  **Responsive Design** – Optimized for mobile, tablet, and desktop.
*  **Ride Management** – Browse and manage available rides.
*  **User Profiles** – Update and view user details.
*  **API Integration** – Seamless communication with backend services.
*  **Protected Routes** – Restricted access based on authentication.
*  **Optimized Performance** – Fast loading and smooth navigation.

---

##  Technology Stack

* **Frontend Framework**: React (with TypeScript)
* **State Management**: Redux Toolkit / Context API (based on usage)
* **Styling**: Tailwind CSS / Shadcn UI
* **Routing**: React Router DOM
* **API Calls**: Axios
* **Deployment**: Vercel

---

##  Setup Instructions

### 1 Clone the Repository

```bash
 git clone https://github.com/Rakib-Akanda/jatra-frontend.git
 cd jatra-frontend
```

### 2 Install Dependencies

```bash
 npm install
```

### 3 Setup Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_API_BASE_URL=your_backend_api_url
```

### 4 Run in Development

```bash
 npm run dev
```

### 5 Build for Production

```bash
 npm run build
```

### 6 Preview Production Build

```bash
 npm run preview
```

---

##  Additional Notes

* Make sure the backend server (`Jatra Backend`) is running and CORS is configured properly.
* Use `withCredentials: true` in Axios if authentication relies on cookies.
* For token-based authentication, store the JWT in `localStorage` or `httpOnly` cookies depending on your security strategy.
* Contributions and pull requests are welcome!

---

##  Author

**Rakib Akanda**
[GitHub Profile](https://github.com/Rakib-Akanda)
