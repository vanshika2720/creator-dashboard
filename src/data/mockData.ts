export const explorations = [
  {
    id: 'all',
    name: 'All Explorations',
    title: 'All Explorations',
  },
  {
    id: 'fractions-intro',
    name: 'Introduction to Fractions',
    title: 'Introduction to Fractions',
    enrollments: 3245,
    views: 5821,
    avgRating: 4.7,
    totalRatings: 487,
    completionRate: 78,
    avgTimeSpent: '2.4h',
    feedbackCount: 234,
    activeUsers: 2156,
    avgScore: 86.5,
  },
  {
    id: 'algebra-basics',
    name: 'Algebra Fundamentals',
    title: 'Algebra Fundamentals',
    enrollments: 2891,
    views: 4532,
    avgRating: 4.5,
    totalRatings: 356,
    completionRate: 72,
    avgTimeSpent: '3.1h',
    feedbackCount: 198,
    activeUsers: 1847,
    avgScore: 82.3,
  },
  {
    id: 'plant-biology',
    name: 'Understanding Plant Biology',
    title: 'Understanding Plant Biology',
    enrollments: 1876,
    views: 3214,
    avgRating: 4.8,
    totalRatings: 245,
    completionRate: 85,
    avgTimeSpent: '1.8h',
    feedbackCount: 167,
    activeUsers: 1234,
    avgScore: 89.2,
  },
  {
    id: 'english-grammar',
    name: 'English Grammar Mastery',
    title: 'English Grammar Mastery',
    enrollments: 4123,
    views: 6789,
    avgRating: 4.6,
    totalRatings: 612,
    completionRate: 69,
    avgTimeSpent: '4.2h',
    feedbackCount: 321,
    activeUsers: 2997,
    avgScore: 84.7,
  },
  {
    id: 'chemistry-basics',
    name: 'Basic Chemistry Concepts',
    title: 'Basic Chemistry Concepts',
    enrollments: 1534,
    views: 2456,
    avgRating: 4.4,
    totalRatings: 178,
    completionRate: 64,
    avgTimeSpent: '2.8h',
    feedbackCount: 92,
    activeUsers: 1000,
    avgScore: 80.1,
  },
];

// Engagement data by date range and exploration
export const engagementDataByDateRange = {
  '7days': {
    'all': [
      { date: 'Dec 3', views: 7800, enrollments: 4900, completions: 3700 },
      { date: 'Dec 4', views: 8200, enrollments: 5100, completions: 3900 },
      { date: 'Dec 5', views: 8500, enrollments: 5400, completions: 4100 },
      { date: 'Dec 6', views: 9200, enrollments: 5800, completions: 4400 },
      { date: 'Dec 7', views: 8900, enrollments: 5600, completions: 4250 },
      { date: 'Dec 8', views: 9500, enrollments: 6000, completions: 4550 },
      { date: 'Dec 9', views: 9800, enrollments: 6200, completions: 4700 },
    ],
    'fractions-intro': [
      { date: 'Dec 3', views: 1280, enrollments: 790, completions: 615 },
      { date: 'Dec 4', views: 1350, enrollments: 840, completions: 655 },
      { date: 'Dec 5', views: 1400, enrollments: 870, completions: 680 },
      { date: 'Dec 6', views: 1500, enrollments: 920, completions: 720 },
      { date: 'Dec 7', views: 1460, enrollments: 900, completions: 700 },
      { date: 'Dec 8', views: 1550, enrollments: 960, completions: 750 },
      { date: 'Dec 9', views: 1600, enrollments: 990, completions: 775 },
    ],
    'algebra-basics': [
      { date: 'Dec 3', views: 1090, enrollments: 680, completions: 490 },
      { date: 'Dec 4', views: 1140, enrollments: 710, completions: 515 },
      { date: 'Dec 5', views: 1180, enrollments: 740, completions: 535 },
      { date: 'Dec 6', views: 1240, enrollments: 770, completions: 555 },
      { date: 'Dec 7', views: 1210, enrollments: 750, completions: 540 },
      { date: 'Dec 8', views: 1290, enrollments: 800, completions: 575 },
      { date: 'Dec 9', views: 1330, enrollments: 825, completions: 595 },
    ],
    'plant-biology': [
      { date: 'Dec 3', views: 730, enrollments: 460, completions: 390 },
      { date: 'Dec 4', views: 770, enrollments: 485, completions: 415 },
      { date: 'Dec 5', views: 800, enrollments: 500, completions: 425 },
      { date: 'Dec 6', views: 830, enrollments: 520, completions: 445 },
      { date: 'Dec 7', views: 810, enrollments: 510, completions: 435 },
      { date: 'Dec 8', views: 860, enrollments: 540, completions: 460 },
      { date: 'Dec 9', views: 890, enrollments: 560, completions: 475 },
    ],
    'english-grammar': [
      { date: 'Dec 3', views: 1560, enrollments: 990, completions: 680 },
      { date: 'Dec 4', views: 1640, enrollments: 1040, completions: 715 },
      { date: 'Dec 5', views: 1700, enrollments: 1080, completions: 745 },
      { date: 'Dec 6', views: 1770, enrollments: 1120, completions: 770 },
      { date: 'Dec 7', views: 1730, enrollments: 1095, completions: 755 },
      { date: 'Dec 8', views: 1840, enrollments: 1165, completions: 800 },
      { date: 'Dec 9', views: 1900, enrollments: 1205, completions: 830 },
    ],
    'chemistry-basics': [
      { date: 'Dec 3', views: 570, enrollments: 355, completions: 225 },
      { date: 'Dec 4', views: 600, enrollments: 375, completions: 240 },
      { date: 'Dec 5', views: 620, enrollments: 390, completions: 250 },
      { date: 'Dec 6', views: 650, enrollments: 400, completions: 255 },
      { date: 'Dec 7', views: 635, enrollments: 395, completions: 250 },
      { date: 'Dec 8', views: 675, enrollments: 420, completions: 270 },
      { date: 'Dec 9', views: 700, enrollments: 435, completions: 280 },
    ],
  },
  '30days': {
    'all': [
      { date: 'Nov 1', views: 5200, enrollments: 3200, completions: 2400 },
      { date: 'Nov 8', views: 5800, enrollments: 3600, completions: 2700 },
      { date: 'Nov 15', views: 6500, enrollments: 4100, completions: 3100 },
      { date: 'Nov 22', views: 7200, enrollments: 4500, completions: 3400 },
      { date: 'Nov 29', views: 8100, enrollments: 5200, completions: 3900 },
      { date: 'Dec 6', views: 9200, enrollments: 5800, completions: 4400 },
    ],
    'fractions-intro': [
      { date: 'Nov 1', views: 850, enrollments: 520, completions: 410 },
      { date: 'Nov 8', views: 920, enrollments: 580, completions: 450 },
      { date: 'Nov 15', views: 1050, enrollments: 650, completions: 510 },
      { date: 'Nov 22', views: 1180, enrollments: 720, completions: 560 },
      { date: 'Nov 29', views: 1320, enrollments: 810, completions: 630 },
      { date: 'Dec 6', views: 1500, enrollments: 920, completions: 720 },
    ],
    'algebra-basics': [
      { date: 'Nov 1', views: 720, enrollments: 450, completions: 320 },
      { date: 'Nov 8', views: 790, enrollments: 490, completions: 355 },
      { date: 'Nov 15', views: 880, enrollments: 550, completions: 395 },
      { date: 'Nov 22', views: 970, enrollments: 610, completions: 440 },
      { date: 'Nov 29', views: 1090, enrollments: 680, completions: 490 },
      { date: 'Dec 6', views: 1240, enrollments: 770, completions: 555 },
    ],
    'plant-biology': [
      { date: 'Nov 1', views: 480, enrollments: 300, completions: 255 },
      { date: 'Nov 8', views: 530, enrollments: 330, completions: 280 },
      { date: 'Nov 15', views: 590, enrollments: 370, completions: 315 },
      { date: 'Nov 22', views: 650, enrollments: 410, completions: 350 },
      { date: 'Nov 29', views: 730, enrollments: 460, completions: 390 },
      { date: 'Dec 6', views: 830, enrollments: 520, completions: 445 },
    ],
    'english-grammar': [
      { date: 'Nov 1', views: 1020, enrollments: 650, completions: 450 },
      { date: 'Nov 8', views: 1130, enrollments: 720, completions: 495 },
      { date: 'Nov 15', views: 1260, enrollments: 800, completions: 550 },
      { date: 'Nov 22', views: 1390, enrollments: 880, completions: 610 },
      { date: 'Nov 29', views: 1560, enrollments: 990, completions: 680 },
      { date: 'Dec 6', views: 1770, enrollments: 1120, completions: 770 },
    ],
    'chemistry-basics': [
      { date: 'Nov 1', views: 370, enrollments: 230, completions: 145 },
      { date: 'Nov 8', views: 410, enrollments: 255, completions: 165 },
      { date: 'Nov 15', views: 460, enrollments: 285, completions: 185 },
      { date: 'Nov 22', views: 510, enrollments: 315, completions: 200 },
      { date: 'Nov 29', views: 570, enrollments: 355, completions: 225 },
      { date: 'Dec 6', views: 650, enrollments: 400, completions: 255 },
    ],
  },
  '90days': {
    'all': [
      { date: 'Sep 15', views: 3200, enrollments: 2000, completions: 1500 },
      { date: 'Sep 30', views: 3800, enrollments: 2400, completions: 1800 },
      { date: 'Oct 15', views: 4500, enrollments: 2800, completions: 2100 },
      { date: 'Oct 31', views: 5200, enrollments: 3200, completions: 2400 },
      { date: 'Nov 15', views: 6500, enrollments: 4100, completions: 3100 },
      { date: 'Nov 30', views: 8100, enrollments: 5200, completions: 3900 },
      { date: 'Dec 9', views: 9800, enrollments: 6200, completions: 4700 },
    ],
    'fractions-intro': [
      { date: 'Sep 15', views: 520, enrollments: 320, completions: 250 },
      { date: 'Sep 30', views: 620, enrollments: 385, completions: 300 },
      { date: 'Oct 15', views: 730, enrollments: 450, completions: 355 },
      { date: 'Oct 31', views: 850, enrollments: 520, completions: 410 },
      { date: 'Nov 15', views: 1050, enrollments: 650, completions: 510 },
      { date: 'Nov 30', views: 1320, enrollments: 810, completions: 630 },
      { date: 'Dec 9', views: 1600, enrollments: 990, completions: 775 },
    ],
    'algebra-basics': [
      { date: 'Sep 15', views: 440, enrollments: 275, completions: 195 },
      { date: 'Sep 30', views: 530, enrollments: 330, completions: 240 },
      { date: 'Oct 15', views: 620, enrollments: 385, completions: 280 },
      { date: 'Oct 31', views: 720, enrollments: 450, completions: 320 },
      { date: 'Nov 15', views: 880, enrollments: 550, completions: 395 },
      { date: 'Nov 30', views: 1090, enrollments: 680, completions: 490 },
      { date: 'Dec 9', views: 1330, enrollments: 825, completions: 595 },
    ],
    'plant-biology': [
      { date: 'Sep 15', views: 295, enrollments: 185, completions: 155 },
      { date: 'Sep 30', views: 350, enrollments: 220, completions: 185 },
      { date: 'Oct 15', views: 415, enrollments: 260, completions: 220 },
      { date: 'Oct 31', views: 480, enrollments: 300, completions: 255 },
      { date: 'Nov 15', views: 590, enrollments: 370, completions: 315 },
      { date: 'Nov 30', views: 730, enrollments: 460, completions: 390 },
      { date: 'Dec 9', views: 890, enrollments: 560, completions: 475 },
    ],
    'english-grammar': [
      { date: 'Sep 15', views: 625, enrollments: 395, completions: 275 },
      { date: 'Sep 30', views: 745, enrollments: 470, completions: 325 },
      { date: 'Oct 15', views: 880, enrollments: 555, completions: 385 },
      { date: 'Oct 31', views: 1020, enrollments: 650, completions: 450 },
      { date: 'Nov 15', views: 1260, enrollments: 800, completions: 550 },
      { date: 'Nov 30', views: 1560, enrollments: 990, completions: 680 },
      { date: 'Dec 9', views: 1900, enrollments: 1205, completions: 830 },
    ],
    'chemistry-basics': [
      { date: 'Sep 15', views: 230, enrollments: 145, completions: 90 },
      { date: 'Sep 30', views: 270, enrollments: 170, completions: 110 },
      { date: 'Oct 15', views: 320, enrollments: 200, completions: 130 },
      { date: 'Oct 31', views: 370, enrollments: 230, completions: 145 },
      { date: 'Nov 15', views: 460, enrollments: 285, completions: 185 },
      { date: 'Nov 30', views: 570, enrollments: 355, completions: 225 },
      { date: 'Dec 9', views: 700, enrollments: 435, completions: 280 },
    ],
  },
  '1year': {
    'all': [
      { date: 'Jan', views: 1800, enrollments: 1100, completions: 850 },
      { date: 'Mar', views: 2400, enrollments: 1500, completions: 1150 },
      { date: 'May', views: 3100, enrollments: 1950, completions: 1450 },
      { date: 'Jul', views: 4200, enrollments: 2650, completions: 2000 },
      { date: 'Sep', views: 5500, enrollments: 3450, completions: 2600 },
      { date: 'Nov', views: 7500, enrollments: 4700, completions: 3550 },
      { date: 'Dec', views: 9800, enrollments: 6200, completions: 4700 },
    ],
    'fractions-intro': [
      { date: 'Jan', views: 295, enrollments: 180, completions: 140 },
      { date: 'Mar', views: 395, enrollments: 245, completions: 190 },
      { date: 'May', views: 510, enrollments: 315, completions: 245 },
      { date: 'Jul', views: 685, enrollments: 425, completions: 330 },
      { date: 'Sep', views: 900, enrollments: 555, completions: 435 },
      { date: 'Nov', views: 1230, enrollments: 760, completions: 590 },
      { date: 'Dec', views: 1600, enrollments: 990, completions: 775 },
    ],
    'algebra-basics': [
      { date: 'Jan', views: 250, enrollments: 155, completions: 110 },
      { date: 'Mar', views: 335, enrollments: 210, completions: 150 },
      { date: 'May', views: 435, enrollments: 270, completions: 195 },
      { date: 'Jul', views: 590, enrollments: 365, completions: 260 },
      { date: 'Sep', views: 770, enrollments: 480, completions: 345 },
      { date: 'Nov', views: 1015, enrollments: 630, completions: 455 },
      { date: 'Dec', views: 1330, enrollments: 825, completions: 595 },
    ],
    'plant-biology': [
      { date: 'Jan', views: 165, enrollments: 105, completions: 90 },
      { date: 'Mar', views: 220, enrollments: 140, completions: 120 },
      { date: 'May', views: 290, enrollments: 180, completions: 155 },
      { date: 'Jul', views: 390, enrollments: 245, completions: 210 },
      { date: 'Sep', views: 515, enrollments: 320, completions: 275 },
      { date: 'Nov', views: 680, enrollments: 425, completions: 360 },
      { date: 'Dec', views: 890, enrollments: 560, completions: 475 },
    ],
    'english-grammar': [
      { date: 'Jan', views: 355, enrollments: 225, completions: 155 },
      { date: 'Mar', views: 475, enrollments: 300, completions: 205 },
      { date: 'May', views: 620, enrollments: 390, completions: 270 },
      { date: 'Jul', views: 840, enrollments: 530, completions: 365 },
      { date: 'Sep', views: 1100, enrollments: 695, completions: 480 },
      { date: 'Nov', views: 1450, enrollments: 920, completions: 635 },
      { date: 'Dec', views: 1900, enrollments: 1205, completions: 830 },
    ],
    'chemistry-basics': [
      { date: 'Jan', views: 130, enrollments: 80, completions: 50 },
      { date: 'Mar', views: 175, enrollments: 110, completions: 70 },
      { date: 'May', views: 230, enrollments: 145, completions: 90 },
      { date: 'Jul', views: 310, enrollments: 195, completions: 125 },
      { date: 'Sep', views: 405, enrollments: 255, completions: 165 },
      { date: 'Nov', views: 535, enrollments: 335, completions: 215 },
      { date: 'Dec', views: 700, enrollments: 435, completions: 280 },
    ],
  },
};

export const performanceDataByExploration = {
  'all': [
    { range: '0-20%', learners: 145, color: '#ef4444' },
    { range: '21-40%', learners: 328, color: '#f97316' },
    { range: '41-60%', learners: 742, color: '#eab308' },
    { range: '61-80%', learners: 1456, color: '#22c55e' },
    { range: '81-100%', learners: 2443, color: '#10b981' },
  ],
  'fractions-intro': [
    { range: '0-20%', learners: 25, color: '#ef4444' },
    { range: '21-40%', learners: 58, color: '#f97316' },
    { range: '41-60%', learners: 142, color: '#eab308' },
    { range: '61-80%', learners: 356, color: '#22c55e' },
    { range: '81-100%', learners: 564, color: '#10b981' },
  ],
  'algebra-basics': [
    { range: '0-20%', learners: 32, color: '#ef4444' },
    { range: '21-40%', learners: 75, color: '#f97316' },
    { range: '41-60%', learners: 178, color: '#eab308' },
    { range: '61-80%', learners: 412, color: '#22c55e' },
    { range: '81-100%', learners: 494, color: '#10b981' },
  ],
  'plant-biology': [
    { range: '0-20%', learners: 12, color: '#ef4444' },
    { range: '21-40%', learners: 28, color: '#f97316' },
    { range: '41-60%', learners: 89, color: '#eab308' },
    { range: '61-80%', learners: 234, color: '#22c55e' },
    { range: '81-100%', learners: 513, color: '#10b981' },
  ],
  'english-grammar': [
    { range: '0-20%', learners: 48, color: '#ef4444' },
    { range: '21-40%', learners: 112, color: '#f97316' },
    { range: '41-60%', learners: 256, color: '#eab308' },
    { range: '61-80%', learners: 578, color: '#22c55e' },
    { range: '81-100%', learners: 629, color: '#10b981' },
  ],
  'chemistry-basics': [
    { range: '0-20%', learners: 28, color: '#ef4444' },
    { range: '21-40%', learners: 55, color: '#f97316' },
    { range: '41-60%', learners: 77, color: '#eab308' },
    { range: '61-80%', learners: 176, color: '#22c55e' },
    { range: '81-100%', learners: 243, color: '#10b981' },
  ],
};

export const contentEffectivenessData = [
  { type: 'Interactive', completionRate: 85, avgScore: 88 },
  { type: 'Video', completionRate: 78, avgScore: 84 },
  { type: 'Reading', completionRate: 72, avgScore: 81 },
  { type: 'Quiz', completionRate: 90, avgScore: 86 },
];

export const feedbackByExploration = {
  'all': [
    {
      id: 1,
      rating: 5,
      comment: 'Excellent exploration! The interactive exercises really helped me understand the concepts.',
      author: 'Sarah M.',
      date: '2 days ago',
      helpful: 12,
      exploration: 'Introduction to Fractions',
    },
    {
      id: 2,
      rating: 4,
      comment: 'Very informative, but some sections could use more examples.',
      author: 'John D.',
      date: '4 days ago',
      helpful: 8,
      exploration: 'Algebra Fundamentals',
    },
    {
      id: 3,
      rating: 5,
      comment: 'This is exactly what I needed to grasp the fundamentals. Thank you!',
      author: 'Emily R.',
      date: '1 week ago',
      helpful: 15,
      exploration: 'Understanding Plant Biology',
    },
  ],
  'fractions-intro': [
    {
      id: 1,
      rating: 5,
      comment: 'Excellent exploration! The interactive exercises really helped me understand fractions.',
      author: 'Sarah M.',
      date: '2 days ago',
      helpful: 12,
    },
    {
      id: 4,
      rating: 5,
      comment: 'The visual representations made everything clear. Highly recommended!',
      author: 'Michael K.',
      date: '5 days ago',
      helpful: 9,
    },
    {
      id: 7,
      rating: 4,
      comment: 'Great content, would love to see more practice problems.',
      author: 'Lisa P.',
      date: '2 weeks ago',
      helpful: 6,
    },
  ],
  'algebra-basics': [
    {
      id: 2,
      rating: 4,
      comment: 'Very informative, but some sections could use more examples.',
      author: 'John D.',
      date: '4 days ago',
      helpful: 8,
    },
    {
      id: 5,
      rating: 5,
      comment: 'Perfect for beginners! The step-by-step approach is fantastic.',
      author: 'David W.',
      date: '1 week ago',
      helpful: 11,
    },
    {
      id: 8,
      rating: 4,
      comment: 'Good foundation for algebra concepts.',
      author: 'Rachel S.',
      date: '2 weeks ago',
      helpful: 5,
    },
  ],
  'plant-biology': [
    {
      id: 3,
      rating: 5,
      comment: 'This is exactly what I needed to grasp the fundamentals. Thank you!',
      author: 'Emily R.',
      date: '1 week ago',
      helpful: 15,
    },
    {
      id: 6,
      rating: 5,
      comment: 'Beautiful diagrams and clear explanations. Really enjoyed this!',
      author: 'Amanda L.',
      date: '1 week ago',
      helpful: 13,
    },
    {
      id: 9,
      rating: 5,
      comment: 'Best biology exploration I\'ve taken on Oppia!',
      author: 'Tom H.',
      date: '3 weeks ago',
      helpful: 10,
    },
  ],
  'english-grammar': [
    {
      id: 10,
      rating: 5,
      comment: 'Transformed my understanding of grammar rules!',
      author: 'Nina C.',
      date: '3 days ago',
      helpful: 14,
    },
    {
      id: 11,
      rating: 4,
      comment: 'Comprehensive coverage, though a bit lengthy.',
      author: 'Oscar B.',
      date: '6 days ago',
      helpful: 7,
    },
    {
      id: 12,
      rating: 5,
      comment: 'The practice exercises are incredibly helpful!',
      author: 'Patricia V.',
      date: '1 week ago',
      helpful: 9,
    },
  ],
  'chemistry-basics': [
    {
      id: 13,
      rating: 4,
      comment: 'Good introduction to chemistry concepts.',
      author: 'Kevin M.',
      date: '4 days ago',
      helpful: 6,
    },
    {
      id: 14,
      rating: 5,
      comment: 'Made chemistry fun and easy to understand!',
      author: 'Sophie T.',
      date: '1 week ago',
      helpful: 8,
    },
    {
      id: 15,
      rating: 4,
      comment: 'Clear explanations with good examples.',
      author: 'Brian F.',
      date: '2 weeks ago',
      helpful: 5,
    },
  ],
};

export const ratingDistributionByExploration = {
  'all': [
    { stars: 5, count: 1243, percentage: 58 },
    { stars: 4, count: 542, percentage: 25 },
    { stars: 3, count: 234, percentage: 11 },
    { stars: 2, count: 87, percentage: 4 },
    { stars: 1, count: 42, percentage: 2 },
  ],
  'fractions-intro': [
    { stars: 5, count: 287, percentage: 59 },
    { stars: 4, count: 124, percentage: 25 },
    { stars: 3, count: 52, percentage: 11 },
    { stars: 2, count: 18, percentage: 4 },
    { stars: 1, count: 6, percentage: 1 },
  ],
  'algebra-basics': [
    { stars: 5, count: 198, percentage: 56 },
    { stars: 4, count: 95, percentage: 27 },
    { stars: 3, count: 42, percentage: 12 },
    { stars: 2, count: 15, percentage: 4 },
    { stars: 1, count: 6, percentage: 1 },
  ],
  'plant-biology': [
    { stars: 5, count: 167, percentage: 68 },
    { stars: 4, count: 56, percentage: 23 },
    { stars: 3, count: 15, percentage: 6 },
    { stars: 2, count: 5, percentage: 2 },
    { stars: 1, count: 2, percentage: 1 },
  ],
  'english-grammar': [
    { stars: 5, count: 378, percentage: 62 },
    { stars: 4, count: 156, percentage: 25 },
    { stars: 3, count: 56, percentage: 9 },
    { stars: 2, count: 18, percentage: 3 },
    { stars: 1, count: 4, percentage: 1 },
  ],
  'chemistry-basics': [
    { stars: 5, count: 92, percentage: 52 },
    { stars: 4, count: 54, percentage: 30 },
    { stars: 3, count: 22, percentage: 12 },
    { stars: 2, count: 8, percentage: 4 },
    { stars: 1, count: 2, percentage: 2 },
  ],
};

export function getKPIData(selectedCourse: string, dateRange: string = '30days') {
  // Multipliers based on date range
  const rangeMultipliers = {
    '7days': 0.15,
    '30days': 1,
    '90days': 2.8,
    '1year': 12,
  };
  
  const multiplier = rangeMultipliers[dateRange as keyof typeof rangeMultipliers] || 1;
  
  if (selectedCourse === 'all') {
    const allExplorations = explorations.filter(exp => exp.id !== 'all');
    const totalViews = Math.round(allExplorations.reduce((sum, exp) => sum + (exp.views || 0), 0) * multiplier);
    const totalEnrollments = Math.round(allExplorations.reduce((sum, exp) => sum + (exp.enrollments || 0), 0) * multiplier);
    const avgCompletionRate = allExplorations.reduce((sum, exp) => sum + (exp.completionRate || 0), 0) / allExplorations.length;
    const totalRatings = allExplorations.reduce((sum, exp) => sum + (exp.totalRatings || 0), 0);
    const avgRating = allExplorations.reduce((sum, exp) => sum + (exp.avgRating || 0) * (exp.totalRatings || 0), 0) / totalRatings;
    const totalActive = Math.round(allExplorations.reduce((sum, exp) => sum + (exp.activeUsers || 0), 0) * multiplier);
    
    return {
      views: totalViews.toLocaleString(),
      enrollments: totalEnrollments.toLocaleString(),
      completionRate: avgCompletionRate.toFixed(1) + '%',
      rating: avgRating.toFixed(1),
      timeSpent: '2.8h',
      activeUsers: totalActive.toLocaleString(),
    };
  }
  
  const exploration = explorations.find(exp => exp.id === selectedCourse);
  if (!exploration) return null;
  
  return {
    views: Math.round((exploration.views || 0) * multiplier).toLocaleString(),
    enrollments: Math.round((exploration.enrollments || 0) * multiplier).toLocaleString(),
    completionRate: (exploration.completionRate || 0) + '%',
    rating: (exploration.avgRating || 0).toFixed(1),
    timeSpent: exploration.avgTimeSpent || 'N/A',
    activeUsers: Math.round((exploration.activeUsers || 0) * multiplier).toLocaleString(),
  };
}

export function getEngagementData(selectedCourse: string, dateRange: string) {
  const dateRangeData = engagementDataByDateRange[dateRange as keyof typeof engagementDataByDateRange];
  if (!dateRangeData) return engagementDataByDateRange['30days']['all'];
  
  return dateRangeData[selectedCourse as keyof typeof dateRangeData] || dateRangeData['all'];
}