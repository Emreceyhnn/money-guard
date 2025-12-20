# 💰 Money Guard

Money Guard is a modern personal finance web application built with **React** and **Redux Toolkit**, designed to help users track transactions, visualize currency data, and gain clear financial insights through charts and statistics.

The project follows a clean architecture, separates concerns properly, and uses a **serverless proxy** for external APIs to ensure security and CORS compliance in production.

---

## 🚀 Live Demo

👉 https://money-guard-theta.vercel.app

---

## ⚡ Performance & Quality Metrics

Money Guard is built with performance, accessibility, and SEO best practices in mind.  
All metrics below are measured using **Google Lighthouse**.

### 📱 Mobile Lighthouse Results

- **Performance:** 85  
- **Accessibility:** 96  
- **Best Practices:** 100  
- **SEO:** 100  

Mobile performance reflects real-world conditions such as reduced CPU power and slower network speeds.

---

### 🖥 Desktop Lighthouse Results

- **Performance:** 98  
- **Accessibility:** 96  
- **Best Practices:** 100  
- **SEO:** 100  

Desktop results demonstrate excellent rendering speed, efficient asset loading, and clean technical SEO.

---

### 🔧 Performance Highlights

- Optimized build output and asset delivery
- Serverless API proxy to prevent client-side blocking and CORS issues
- Cached external API responses for faster load times
- Efficient global state management with Redux Toolkit
- Responsive, lightweight UI components built with Material UI

Performance is continuously monitored and improved as the application evolves.

## ✨ Features

- 📊 Transaction tracking (income & expenses)
- 💱 Real-time currency rates (UAH → USD / EUR)
- 📈 Interactive charts and statistics
- 🧠 Centralized state management with Redux Toolkit
- 🔐 Secure API access via serverless proxy (CORS-safe)
- 🌙 Modern UI with Material UI
- ⚡ Optimized for production (Vercel)

---

## 🛠 Tech Stack

**Frontend**
- React
- Redux Toolkit
- Axios
- Material UI (MUI)
- Chart.js

**Backend (Serverless)**
- Vercel Serverless Functions

**Deployment**
- Vercel

---

## 🧩 Architecture Overview

```txt
Browser (React)
      ↓
Redux Async Thunks
      ↓
Vercel Serverless API  (/api/currency)
      ↓
Monobank Public API
```

🔌 Currency API (CORS-Safe)

Monobank API does not allow direct browser requests.
To solve this, Money Guard uses a Vercel Serverless Function as a proxy. 

```
export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.monobank.ua/bank/currency"
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Currency fetch failed" });
  }
}

```
🔄 Redux Async Operation 
```
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: "/api/",
});

export const fetchCurrency = createAsyncThunk(
  "currency/fetchCurrency",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("currency");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
```

📊 Data Flow

UI dispatches fetchCurrency

Redux thunk calls /api/currency

Serverless function fetches Monobank API

Data is stored in Redux state

Charts & tables re-render automatically 


📈 Insights & Metrics

(To be updated with real data)

Average monthly expenses: TBD

Expense categories distribution: TBD

Currency fluctuation trends: TBD

Monthly balance change: TBD

⚙️ Local Development

```
git clone https://github.com/your-username/money-guard.git
cd money-guard
npm install
npm run dev

```

🌍 Deployment

The project is deployed on Vercel.

/api/* → Serverless Functions

/ → React frontend

No additional backend server is required. 

🧠 Key Decisions

❌ No direct browser calls to external APIs

✅ Serverless proxy for security & CORS compliance

✅ Redux Toolkit for predictable state management

✅ Modular and scalable project structure

🔮 Future Improvements

User authentication

Persistent transactions (database)

Advanced financial analytics

Export reports (CSV / PDF)

Multi-currency support




