import { TrendingUp, TrendingDown, Video, FileText, Headphones, Image } from 'lucide-react';

interface ContentEffectivenessProps {
  dateRange: string;
}

export function ContentEffectiveness({ dateRange }: ContentEffectivenessProps) {
  const contentTypes = [
    {
      type: 'Video Lessons',
      icon: Video,
      engagement: 87,
      completionRate: 82,
      avgScore: 88,
      trend: 'up',
      change: '+5.2%',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      type: 'Interactive Quiz',
      icon: FileText,
      engagement: 92,
      completionRate: 78,
      avgScore: 85,
      trend: 'up',
      change: '+3.8%',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      type: 'Audio Content',
      icon: Headphones,
      engagement: 68,
      completionRate: 65,
      avgScore: 79,
      trend: 'down',
      change: '-2.1%',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      type: 'Visual Diagrams',
      icon: Image,
      engagement: 74,
      completionRate: 71,
      avgScore: 83,
      trend: 'up',
      change: '+1.5%',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ];

  const insights = [
    {
      title: 'Top Performing Module',
      value: 'Fundamentals',
      metric: '95% completion',
      trend: 'positive',
    },
    {
      title: 'Knowledge Gaps',
      value: 'Advanced Topics',
      metric: '62% avg score',
      trend: 'negative',
    },
    {
      title: 'Peak Activity Time',
      value: '2-4 PM',
      metric: '3.2k active users',
      trend: 'neutral',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-gray-900 mb-1">Content Effectiveness</h2>
        <p className="text-sm text-gray-600">Performance by content type</p>
      </div>

      <div className="space-y-4 mb-6">
        {contentTypes.map((content, index) => {
          const Icon = content.icon;
          const TrendIcon = content.trend === 'up' ? TrendingUp : TrendingDown;

          return (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${content.bgColor} rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${content.color}`} />
                  </div>
                  <div>
                    <div className="text-gray-900">{content.type}</div>
                    <div className="flex items-center gap-1 text-sm">
                      <TrendIcon className={`w-3 h-3 ${content.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                      <span className={content.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                        {content.change}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Engagement</div>
                  <div className="text-gray-900">{content.engagement}%</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Completion</div>
                  <div className="text-gray-900">{content.completionRate}%</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Avg Score</div>
                  <div className="text-gray-900">{content.avgScore}%</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-gray-900 mb-4">Key Insights</h3>
        <div className="space-y-3">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start justify-between">
              <div>
                <div className="text-sm text-gray-600">{insight.title}</div>
                <div className="text-gray-900">{insight.value}</div>
              </div>
              <div className="text-sm text-gray-500">{insight.metric}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
