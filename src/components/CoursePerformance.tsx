import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import { performanceDataByExploration, explorations } from '../data/mockData';

interface CoursePerformanceProps {
  selectedCourse: string;
}

export function CoursePerformance({ selectedCourse }: CoursePerformanceProps) {
  const performanceData = performanceDataByExploration[selectedCourse as keyof typeof performanceDataByExploration] || performanceDataByExploration['all'];
  
  // Calculate success rate and avg score
  const totalLearners = performanceData.reduce((sum, item) => sum + item.learners, 0);
  const successfulLearners = performanceData.slice(3).reduce((sum, item) => sum + item.learners, 0);
  const successRate = ((successfulLearners / totalLearners) * 100).toFixed(1);
  
  const exploration = explorations.find(exp => exp.id === selectedCourse);
  const avgScore = exploration?.avgScore || 84.7;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-gray-900 mb-1">Learning Outcomes Distribution</h2>
        <p className="text-sm text-gray-600">Score distribution across all learners</p>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={performanceData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="range" stroke="#6b7280" style={{ fontSize: '12px' }} />
          <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '12px',
            }}
          />
          <Bar dataKey="learners" name="Number of Learners" radius={[8, 8, 0, 0]}>
            {performanceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="text-sm text-green-700 mb-1">Success Rate</div>
          <div className="text-2xl text-green-900">{successRate}%</div>
          <div className="text-xs text-green-600 mt-1">Learners scoring &gt; 60%</div>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="text-sm text-blue-700 mb-1">Avg. Score</div>
          <div className="text-2xl text-blue-900">{avgScore.toFixed(1)}%</div>
          <div className="text-xs text-blue-600 mt-1">Across all assessments</div>
        </div>
      </div>
    </div>
  );
}