# Oppia Creator Analytics Dashboard

A comprehensive analytics dashboard for Oppia course creators, admins, and L&D managers to track key performance indicators for their educational content.

## Features

- **6 Key KPI Cards**: Views, Enrollments, Completion Rate, Rating, Time Spent, Active Learners
- **Interactive Filters**: 
  - Exploration dropdown (filter by specific course or view all)
  - Date Range selector (7 Days, 30 Days, 90 Days, 1 Year)
- **Engagement Charts**: Visual trends showing views, enrollments, and completions over time
- **Learning Outcomes Analysis**: Score distribution visualization
- **Exploration Performance Table**: Comprehensive metrics for all explorations
- **Content Type Effectiveness**: Performance comparison by content type
- **Ratings & Feedback**: Rating distribution and recent learner reviews
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for styling
- **Recharts** for data visualization
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This application is ready to deploy on:

- **Vercel** (recommended)
- **Netlify**
- **Any static hosting service**

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will auto-detect the Vite configuration
4. Click "Deploy"

The build output is in the `dist` folder.

## Project Structure

```
/
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
├── index.html             # HTML template
├── components/            # React components
│   ├── FilterBar.tsx
│   ├── KPICards.tsx
│   ├── EngagementCharts.tsx
│   ├── CoursePerformance.tsx
│   ├── ExplorationsList.tsx
│   ├── ContentEffectiveness.tsx
│   └── RatingsAndFeedback.tsx
├── data/
│   └── mockData.ts        # Mock data and data access functions
└── styles/
    └── globals.css        # Global styles and Tailwind config
```

## Data Integration

The dashboard currently uses mock data from `/data/mockData.ts`. To integrate with real Oppia backend:

1. Replace mock data functions in `mockData.ts` with API calls
2. Connect to Oppia backend models:
   - ExplorationModel
   - StatsModel
   - UserModel
3. Update data fetching logic in components

## License

MIT License - feel free to use this for your educational projects!
