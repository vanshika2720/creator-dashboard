import { Users, Trophy, Clock, TrendingUp, Eye, Star } from 'lucide-react';
import { getKPIData } from '../data/mockData';

interface KPICardsProps {
  dateRange: string;
  selectedCourse: string;
}

export function KPICards({ dateRange, selectedCourse }: KPICardsProps) {
  const kpiData = getKPIData(selectedCourse, dateRange);
  
  if (!kpiData) return null;

  const kpis = [
    {
      title: 'Total Views',
      value: kpiData.views,
      change: '+15.3%',
      trend: 'up',
      icon: Eye,
      color: 'blue',
    },
    {
      title: 'Total Enrollments',
      value: kpiData.enrollments,
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'purple',
    },
    {
      title: 'Completion Rate',
      value: kpiData.completionRate,
      change: '+5.3%',
      trend: 'up',
      icon: Trophy,
      color: 'green',
    },
    {
      title: 'Average Rating',
      value: kpiData.rating,
      change: '+0.2',
      trend: 'up',
      icon: Star,
      color: 'yellow',
    },
    {
      title: 'Avg. Time Spent',
      value: kpiData.timeSpent,
      change: '+0.4h',
      trend: 'up',
      icon: Clock,
      color: 'indigo',
    },
    {
      title: 'Active Learners',
      value: kpiData.activeUsers,
      change: '+18.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'pink',
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    purple: 'bg-purple-50 text-purple-600',
    indigo: 'bg-indigo-50 text-indigo-600',
    pink: 'bg-pink-50 text-pink-600',
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
      {kpis.map((kpi, index) => {
        const Icon = kpi.icon;
        return (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClasses[kpi.color as keyof typeof colorClasses]}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className={`text-sm ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {kpi.change}
              </span>
            </div>
            <div className="text-2xl text-gray-900 mb-1">{kpi.value}</div>
            <div className="text-sm text-gray-600">{kpi.title}</div>
          </div>
        );
      })}
    </div>
  );
}