import { Star, Eye, Clock, CheckCircle, MessageSquare, TrendingUp } from 'lucide-react';
import { explorations } from '../data/mockData';

interface ExplorationsListProps {
  selectedCourse: string;
}

export function ExplorationsList({ selectedCourse }: ExplorationsListProps) {
  const allExplorations = explorations.filter(exp => exp.id !== 'all');
  const displayExplorations = selectedCourse === 'all' 
    ? allExplorations 
    : allExplorations.filter(exp => exp.id === selectedCourse);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-gray-900 mb-1">Exploration Performance Overview</h2>
        <p className="text-sm text-gray-600">
          Detailed metrics for {selectedCourse === 'all' ? 'all your published explorations' : 'selected exploration'}
        </p>
      </div>

      <div className="space-y-4">
        {displayExplorations.map((exploration) => (
          <div
            key={exploration.id}
            className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-gray-900 mb-2">{exploration.title}</h3>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-gray-900">{exploration.avgRating}</span>
                    <span className="text-sm text-gray-500">
                      ({exploration.totalRatings} ratings)
                    </span>
                  </div>
                  <span className="text-sm px-2 py-1 bg-green-100 text-green-700 rounded">
                    Published
                  </span>
                  <span className="text-sm text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +{Math.floor(Math.random() * 10 + 5)}%
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div>
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                  <Eye className="w-4 h-4" />
                  Views
                </div>
                <div className="text-gray-900">{exploration.views.toLocaleString()}</div>
              </div>

              <div>
                <div className="text-sm text-gray-600 mb-1">Enrollments</div>
                <div className="text-gray-900">
                  {exploration.enrollments.toLocaleString()}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                  <CheckCircle className="w-4 h-4" />
                  Completion
                </div>
                <div className="text-gray-900">{exploration.completionRate}%</div>
              </div>

              <div>
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                  <Clock className="w-4 h-4" />
                  Avg Time
                </div>
                <div className="text-gray-900">{exploration.avgTimeSpent}</div>
              </div>

              <div>
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                  <MessageSquare className="w-4 h-4" />
                  Feedback
                </div>
                <div className="text-gray-900">{exploration.feedbackCount}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}