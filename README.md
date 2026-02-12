# smart-student-dashboard

## Project description
Smart Student Dashboard is a clean, data-driven learning dashboard that brings performance, attendance, and activity into one coherent view. It is designed for fast decision-making: educators can scan key metrics at a glance, drill into student profiles, and review trends through clear visualizations. The UI emphasizes clarity, responsive layouts, and reusable components so the experience stays consistent across pages and devices.

## Goals
- Unify academic, attendance, and activity insights in one place
- Surface trends quickly with readable charts and summaries
- Deliver a fast, responsive UI for daily use

## Tech stack
- React
- Vite
- Tailwind CSS
- Recharts

## Features
- KPI-focused dashboard overview
- Student list with drill-down profiles
- Reports with performance visualizations
- Reusable UI components and layout

## Folder structure
```
src/
   assets/       # Images, icons, logos
   components/   # Reusable UI components (cards, buttons, tables)
   pages/        # Dashboard, Students, Reports, StudentProfile
   layouts/      # Navbar + Sidebar layout
   hooks/        # Custom hooks
   services/     # API calls or mock data fetch
   utils/        # Helper functions
   data/         # Mock JSON data
   context/      # Global state
```

## How to run
1. Install dependencies:
   `npm install`
2. Start the dev server:
   `npm run dev`
