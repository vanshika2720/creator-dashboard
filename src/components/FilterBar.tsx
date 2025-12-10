import { Calendar, Filter } from 'lucide-react';
import { explorations } from '../data/mockData';

interface FilterBarProps {
  dateRange: string;
  setDateRange: (value: string) => void;
  selectedCourse: string;
  setSelectedCourse: (value: string) => void;
}

export function FilterBar({ dateRange, setDateRange, selectedCourse, setSelectedCourse }: FilterBarProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm text-gray-700 mb-2">
            <Calendar className="w-4 h-4 inline mr-2" />
            Date Range
          </label>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
            <option value="1year">Last Year</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm text-gray-700 mb-2">
            <Filter className="w-4 h-4 inline mr-2" />
            Exploration
          </label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {explorations.map(exploration => (
              <option key={exploration.id} value={exploration.id}>
                {exploration.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}