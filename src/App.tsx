import { useState } from 'react';
import { KPICards } from './components/KPICards';
import { EngagementCharts } from './components/EngagementCharts';
import { CoursePerformance } from './components/CoursePerformance';
import { ContentEffectiveness } from './components/ContentEffectiveness';
import { ExplorationsList } from './components/ExplorationsList';
import { RatingsAndFeedback } from './components/RatingsAndFeedback';
import { FilterBar } from './components/FilterBar';

export default function App() {
  const [dateRange, setDateRange] = useState('30days');
  const [selectedCourse, setSelectedCourse] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-gray-900 mb-2">Creator Analytics Dashboard</h1>
          <p className="text-gray-600">
            Track engagement, exploration performance, and content effectiveness
          </p>
        </div>

        <FilterBar
          dateRange={dateRange}
          setDateRange={setDateRange}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
        />

        <KPICards dateRange={dateRange} selectedCourse={selectedCourse} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <EngagementCharts dateRange={dateRange} selectedCourse={selectedCourse} />
          <CoursePerformance selectedCourse={selectedCourse} />
        </div>

        <div className="mb-6">
          <ExplorationsList selectedCourse={selectedCourse} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ContentEffectiveness dateRange={dateRange} />
          <RatingsAndFeedback selectedCourse={selectedCourse} />
        </div>
      </main>
    </div>
  );
}