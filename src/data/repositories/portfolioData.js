import { ProjectModel } from '../models/ProjectModel.js';

export const portfolioData = {
  projects: [
    new ProjectModel({
      id: '1',
      title: 'E-Commerce App',
      shortDescription: 'Modern shopping app with seamless UX',
      detailedDescription: `**E-Commerce Mobile Application**

A comprehensive e-commerce solution built with Flutter, featuring:

• **Modern UI/UX Design** - Clean, intuitive interface following Material Design 3 principles
• **Seamless Shopping Experience** - Product browsing, cart management, and secure checkout
• **Real-time Updates** - Live inventory tracking and push notifications
• **Payment Integration** - Multiple payment gateways including Stripe and PayPal
• **User Authentication** - Secure login with Firebase Auth and social login options
• **Order Management** - Complete order tracking from placement to delivery

*Built with clean architecture principles and state management using Bloc pattern.*`,
      thumbnailUrl: '/images/projects/ecommerce_thumbnail.jpg',
      videoUrl: '/videos/ecommerce_demo.mp4',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Stripe', 'Bloc'],
      category: 'Mobile App',
      completionDate: new Date(2024, 2, 15) // March 15, 2024
    }),

    new ProjectModel({
      id: '2',
      title: 'Task Management Dashboard',
      shortDescription: 'Productivity app for team collaboration',
      detailedDescription: `**Task Management Dashboard**

A powerful productivity application designed for modern teams:

• **Team Collaboration** - Real-time task assignments and progress tracking
• **Smart Analytics** - Performance insights and productivity metrics
• **Customizable Workflows** - Flexible project management with custom statuses
• **Cross-platform Sync** - Seamless synchronization across all devices
• **Dark Mode Support** - Eye-friendly interface with theme switching
• **Offline Capability** - Work without internet with automatic sync

*Implemented using Provider for state management and SQLite for local storage.*`,
      thumbnailUrl: '/images/projects/task_management_thumbnail.jpg',
      videoUrl: '/videos/task_management_demo.mp4',
      technologies: ['Flutter', 'Provider', 'SQLite', 'REST API'],
      category: 'Productivity',
      completionDate: new Date(2024, 1, 20) // February 20, 2024
    }),

    new ProjectModel({
      id: '3',
      title: 'Fitness Tracker',
      shortDescription: 'Health & wellness companion app',
      detailedDescription: `**Fitness Tracker Application**

Your personal health and wellness companion:

• **Activity Monitoring** - Step counting, distance tracking, and calorie calculation
• **Workout Plans** - Customizable exercise routines with video guidance
• **Health Insights** - Detailed analytics and progress visualization
• **Social Features** - Share achievements and compete with friends
• **Wearable Integration** - Connect with popular fitness devices
• **Nutrition Tracking** - Food logging with extensive database

*Features integration with Health APIs and implements custom animations for enhanced UX.*`,
      thumbnailUrl: '/images/projects/fitness_thumbnail.jpg',
      videoUrl: '/videos/fitness_demo.mp4',
      technologies: ['Flutter', 'HealthKit', 'Charts', 'Animations'],
      category: 'Health & Fitness',
      completionDate: new Date(2024, 0, 10) // January 10, 2024
    }),

    new ProjectModel({
      id: '4',
      title: 'Recipe Finder',
      shortDescription: 'Discover and save delicious recipes',
      detailedDescription: `**Recipe Finder Application**

Discover your next favorite meal:

• **Smart Search** - Find recipes by ingredients, cuisine, or dietary preferences
• **Recipe Collections** - Save and organize your favorite recipes
• **Meal Planning** - Weekly meal planner with shopping list generation
• **Cooking Timer** - Built-in timer with step-by-step instructions
• **Nutritional Info** - Detailed nutritional breakdown for each recipe
• **Community Features** - Share your own recipes and rate others

*Utilizes recipe APIs and implements advanced filtering with search functionality.*`,
      thumbnailUrl: '/images/projects/recipe_thumbnail.jpg',
      videoUrl: '/videos/recipe_demo.mp4',
      technologies: ['Flutter', 'REST API', 'Local Storage', 'Search'],
      category: 'Lifestyle',
      completionDate: new Date(2023, 11, 5) // December 5, 2023
    }),

    new ProjectModel({
      id: '5',
      title: 'Weather Forecast',
      shortDescription: 'Beautiful weather app with forecasts',
      detailedDescription: `**Weather Forecast Application**

Stay informed about weather conditions:

• **Accurate Forecasts** - 7-day weather predictions with hourly updates
• **Location-based** - Automatic location detection with manual search option
• **Weather Maps** - Interactive radar and satellite imagery
• **Severe Weather Alerts** - Push notifications for weather warnings
• **Multiple Locations** - Track weather for multiple cities
• **Beautiful Animations** - Weather-themed animations and transitions

*Integrates with OpenWeatherMap API and features custom weather animations.*`,
      thumbnailUrl: '/images/projects/weather_thumbnail.jpg',
      videoUrl: '/videos/weather_demo.mp4',
      technologies: ['Flutter', 'Weather API', 'Location', 'Animations'],
      category: 'Utility',
      completionDate: new Date(2023, 10, 18) // November 18, 2023
    })
  ],

  get categories() {
    return [...new Set(this.projects.map(project => project.category))];
  },

  getProjectsByCategory(category) {
    return this.projects.filter(project => project.category === category);
  }
};