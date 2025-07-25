md
Copy
Edit
# 🧠 EyeGoTask – Smart Dashboard App

EyeGoTask is a modern, responsive dashboard web application built with the latest technologies:  
- **Next.js 15 (App Router + Turbopack)**
- **React 19**
- **Redux Toolkit**
- **Firebase Authentication**
- **Plotly.js** for data visualization
- **Tailwind CSS** for clean, responsive design
- **AG Grid** for data tables

---

## 🚀 Features

- 🔐 **User Authentication** (Firebase-based)
- 📊 **Interactive Charts** with Plotly
- 📋 **Advanced Data Tables** with filtering, sorting & pagination
- 📱 **Fully Responsive UI** using Tailwind CSS
- ⚛️ **Global State Management** with Redux Toolkit
- 🎯 Built with **Next.js App Router** and **Turbopack**

---

## 📦 Stack

| Technology         | Purpose                          |
|--------------------|----------------------------------|
| Next.js 15         | Framework / SSR / Routing        |
| React 19           | UI Library                       |
| Redux Toolkit      | Global state management          |
| Firebase           | Authentication                   |
| Plotly.js          | Charts and Data Visualization    |
| AG Grid            | Data Table component             |
| Tailwind CSS       | Styling and responsiveness       |
| Radix UI           | Accessible components (labels)   |

---

## 🛠️ Installation

```bash
git clone https://github.com/your-username/eyegotask.git
cd eyegotask
npm install
💻 Development
bash
Copy
Edit
npm run dev
Then open http://localhost:3000 in your browser.

🏗️ Build for Production
bash
Copy
Edit
npm run build
npm start
🔐 Firebase Setup
Create a Firebase project.

Enable Email/Password authentication.

Create a .env.local file with:

env
Copy
Edit
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
Initialize Firebase in firebase.ts and use Firebase Auth in your app.

📁 Project Structure (App Router)
bash
Copy
Edit
src/
├── app/
│   ├── page.tsx          # Login / Home
│   ├── dashboard/
│   │   └── page.tsx      # Protected Dashboard
├── components/           # UI Components
├── features/             # Redux Features (auth, etc.)
├── utils/                # Helper functions
├── app/store.ts          # Redux store
└── styles/               # Tailwind global styles
📊 Charts (Plotly.js Example)
tsx
Copy
Edit
import Plot from 'react-plotly.js';

<Plot
  data={[{ type: 'bar', x: ['A', 'B'], y: [10, 20] }]}
  layout={{ title: 'Simple Chart' }}
/>
✅ Todo / Roadmap
 Firebase Auth

 Redux Global Store

 Dashboard layout

 Plotly Charts

 AG Grid Table

 Dark Mode

 Role-based access

📄 License
MIT License © 2025 [Your Name]

🙌 Acknowledgements
Next.js

Redux Toolkit

Firebase

Plotly.js

AG Grid

Tailwind CSS