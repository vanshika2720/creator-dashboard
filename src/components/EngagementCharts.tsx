import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { getEngagementData } from '../data/mockData';

interface EngagementChartsProps {
  dateRange: string;
  selectedCourse: string;
}

export function EngagementCharts({ dateRange, selectedCourse }: EngagementChartsProps) {
  const engagementData = getEngagementData(selectedCourse, dateRange);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-gray-900 mb-1">Exploration Engagement Trends</h2>
        <p className="text-sm text-gray-600">Views, enrollments, and completion data over time</p>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={engagementData}>
          <defs>
            <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorEnrollments" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorCompletions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" stroke="#6b7280" style={{ fontSize: '12px' }} />
          <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '12px',
            }}
          />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
          <Area
            type="monotone"
            dataKey="views"
            stroke="#3b82f6"
            strokeWidth={2}
            fill="url(#colorViews)"
            name="Views"
          />
          <Area
            type="monotone"
            dataKey="enrollments"
            stroke="#8b5cf6"
            strokeWidth={2}
            fill="url(#colorEnrollments)"
            name="Enrollments"
          />
          <Area
            type="monotone"
            dataKey="completions"
            stroke="#10b981"
            strokeWidth={2}
            fill="url(#colorCompletions)"
            name="Completions"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}