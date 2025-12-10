import { Star, ThumbsUp, MessageCircle } from 'lucide-react';
import { ratingDistributionByExploration, feedbackByExploration } from '../data/mockData';

interface RatingsAndFeedbackProps {
  selectedCourse: string;
}

export function RatingsAndFeedback({ selectedCourse }: RatingsAndFeedbackProps) {
  const ratingDistribution = ratingDistributionByExploration[selectedCourse as keyof typeof ratingDistributionByExploration] || ratingDistributionByExploration['all'];
  const recentFeedback = feedbackByExploration[selectedCourse as keyof typeof feedbackByExploration] || feedbackByExploration['all'];

  const totalRatings = ratingDistribution.reduce((sum, item) => sum + item.count, 0);
  const avgRating = (
    ratingDistribution.reduce((sum, item) => sum + item.stars * item.count, 0) / totalRatings
  ).toFixed(1);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-gray-900 mb-1">Ratings & Feedback</h2>
        <p className="text-sm text-gray-600">Learner reviews and ratings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Overall Rating */}
        <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
          <div className="text-5xl text-gray-900 mb-2">{avgRating}</div>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-5 h-5 ${
                  star <= Math.round(Number(avgRating))
                    ? 'text-yellow-500 fill-yellow-500'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="text-sm text-gray-600">{totalRatings.toLocaleString()} total ratings</div>
        </div>

        {/* Rating Distribution */}
        <div className="space-y-2">
          {ratingDistribution.map((rating) => (
            <div key={rating.stars} className="flex items-center gap-3">
              <div className="flex items-center gap-1 w-12">
                <span className="text-sm text-gray-700">{rating.stars}</span>
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              </div>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{ width: `${rating.percentage}%` }}
                />
              </div>
              <div className="text-sm text-gray-600 w-16 text-right">
                {rating.count}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Feedback */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-gray-900 mb-4 flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          Recent Comments
        </h3>
        <div className="space-y-4">
          {recentFeedback.map((feedback) => (
            <div key={feedback.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= feedback.rating
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-900">{feedback.author}</span>
                </div>
                <span className="text-sm text-gray-500">{feedback.date}</span>
              </div>
              <p className="text-gray-700 mb-3">{feedback.comment}</p>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <ThumbsUp className="w-4 h-4" />
                <span>{feedback.helpful} found this helpful</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}