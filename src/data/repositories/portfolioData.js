import { ProjectModel } from '../models/ProjectModel.js';

import carwashThumbnail from '../../../src/assets/images/carwashThumbnail.png';
import vetpassThumbnail from '../../../src/assets/images/vetpassThumbnail.png';

import dialavetThumbnail from '../../../src/assets/images/dialavetThumbnail.png';
import eeDoctorsThumbnail from '../../../src/assets/images/eeDoctorsThumbnail.png';
import heydividend from '../../../src/assets/images/heydividend.png';
import hubavetThumbnail from '../../../src/assets/images/hubavetThumbnail.png';
import indieFilmsRus from '../../../src/assets/images/indieFilmsRus.png';
import momoyogaThumbnail from '../../../src/assets/images/momoyogaThumbnail.png';
import NOVAThumbnail from '../../../src/assets/images/NOVAThumbnail.png';
import pangoVetThumbnail from '../../../src/assets/images/pangoVetThumbnail.png';
import PapaScore from '../../../src/assets/images/PapaScore.png';
import pawssumThumbnail from '../../../src/assets/images/pawssumThumbnail.png';
import sheTracker from '../../../src/assets/images/sheTracker.png';
import yoyo from '../../../src/assets/images/yoyo.png';





export const portfolioData = {
  projects: [
 new ProjectModel({
  id: '1',
  title: 'Car Wash App',
  shortDescription: 'Revolutionary car wash management platform with mobile-first customer experience',
  detailedDescription: `**Comprehensive Car Wash Management System**
A cutting-edge SaaS platform revolutionizing car wash operations with seamless mobile integration:

- **Mobile-First Architecture** - Native app experience without downloads, fastest signup in the industry
- **Flexible Payment Solutions** - Single wash purchases and customizable monthly membership plans with usage limits
- **Advanced Location Management** - GPS-enabled wash activation, real-time location awareness, and multi-location control
- **Contactless Payment Integration** - Secure payment processing that works independently of traditional pay stations
- **Customer Engagement Tools** - Automated referrals, promotions, campaigns, SMS/email marketing capabilities
- **QR Code Technology** - Instant signup and wash activation through QR scanning for seamless UX
- **Equipment Integration** - Compatible with tunnels, in-bay automatics, self-serve, vacuums, and dog wash systems
- **Robust Dashboard** - Comprehensive backend control panel for pricing, locations, user management, and analytics
- **Revenue Optimization** - Built-in advertising platform, loyalty programs, and churn reduction features
- **Enterprise-Grade Security** - Same technology stack used by Starbucks, Puma, Twitter, and BMW
- **White-Label Solution** - Customizable branding with company logos, colors, and package names

*Built by car wash industry experts with automated deployment in 7-10 days and comprehensive hardware integration.*

**Key Features:**
- Web-based ticket system integration
- Real-time inventory and usage tracking
- Customizable membership tiers and restrictions
- Customer self-service plan management
- Multi-location franchise support
- Advanced analytics and reporting
- Automated customer retention tools

**Live Platform:** [carwashapp.com](https://carwashapp.com/)
**Demo Access:** Available upon request
**Support:** support@carwashapp.com | 860-214-0046
**Location:** 28 Wyngate Dr, Avon, CT 06001

**Pricing:** $495/month SaaS model with no setup fees, includes all features and unlimited website integration links.`,
  thumbnailUrl: carwashThumbnail,
  videoUrl: "./videos/carwash.mp4",
  technologies: ['React', 'Node.js', 'QR Technology', 'GPS Integration', 'Payment APIs', 'SMS/Email APIs', 'Real-time Analytics', 'Mobile Web App', 'Cloud Infrastructure'],
  category: 'SaaS Platform',
  completionDate: new Date(2024, 2, 15) // March 15, 2024
}),

new ProjectModel({
  id: '2',
  title: 'Dial-a-Vet',
  shortDescription: 'Revolutionary 24/7 telehealth platform connecting pet owners with licensed veterinarians',
  detailedDescription: `**Veterinary Telehealth Platform**
A comprehensive telemedicine solution transforming pet healthcare delivery across Australia and globally:

- **24/7 Veterinary Access** - Connect with licensed Australian veterinarians and veterinary nurses in minutes
- **Affordable Care Model** - Fixed $49 consultation fee making veterinary care accessible to all pet owners
- **Video Consultation Platform** - High-quality video calls enabling real-time pet diagnosis and treatment advice
- **Instant Booking System** - Book appointments in minutes with average wait time of 7-8 minutes
- **Multi-Platform Accessibility** - Web-based platform accessible from any device, anywhere
- **Enterprise-Grade Security** - HIPAA compliant and SOC-2 certified software ensuring data protection
- **Global Expansion** - Successfully expanded to Canada, USA, and UK markets from Australian foundation
- **High Success Rate** - 90% of pet concerns resolved remotely without in-person visits
- **Scalable Infrastructure** - Serving over 40,000 pet owners since launch in August 2022
- **Professional Network** - Licensed veterinary professionals providing expert diagnosis and treatment plans
- **Emergency Support** - Available when local clinics are closed, providing urgent care guidance
- **Corporate Solutions** - Employee benefit programs for companies to provide pet care support

*Founded by CEO Josh Fidrmuc, revolutionizing pet care accessibility with cutting-edge telehealth technology and affordable pricing model.*

**Key Achievements:**
- Over 40,000 registered pet owners
- 90% consultation success rate
- 4-star customer satisfaction rating
- Strategic acquisition of SpeakToAVet.com in 2024
- Global expansion to 4 countries
- Average consultation connection time: 7-8 minutes

**Live Platform:** [dialavet.com](https://www.dialavet.com/)
**Support:** [support@dialavet.com.au](mailto:support@dialavet.com.au)
**Business Model:** $49 per consultation (previously $25)
**Coverage:** Australia, Canada, USA, United Kingdom

**Technology Stack:** Web-based video platform, secure payment processing, appointment scheduling system, licensed veterinarian matching algorithm.`,
  thumbnailUrl: dialavetThumbnail,
  videoUrl: './videos/dialavet.mp4',
  technologies: ['React', 'Node.js', 'WebRTC', 'Payment Gateway', 'Video Streaming', 'Telehealth APIs', 'Security Compliance', 'Cloud Infrastructure'],
  category: 'Telehealth',
  completionDate: new Date(2024, 1, 20) // February 20, 2024
}),

new ProjectModel({
  id: '3',
  title: 'EE Doctors',
  shortDescription: 'Revolutionary Swiss telehealth platform providing instant medical consultations',
  detailedDescription: `**Comprehensive Telehealth Platform**
A cutting-edge Swiss medical platform revolutionizing healthcare accessibility across Europe:

- **Instant Video Consultations** - Connect with licensed Swiss doctors in minutes without appointments or waiting times
- **Dual Communication System** - Free real-time doctor chat and premium video consultations at CHF 3.80/min (EUR 3.40/min)
- **Cost-Effective Care** - Maximum consultation cost capped at CHF 76.00 (20 minutes), averaging 12 minutes per session
- **Professional Medical Network** - 25 experienced general practitioners and emergency physicians with hospital and clinic backgrounds
- **Digital Prescription System** - Electronic prescriptions sent directly to app, redeemable at any pharmacy
- **Comprehensive Medical Coverage** - Treating 90% of general medical cases remotely with same quality as in-person visits
- **Multi-Language Support** - Available in German, French, and Italian for Swiss market
- **Insurance Integration** - Recognized by Swiss health insurance companies with reimbursement options
- **Personal Health Hub** - Digital patient records, consultation reports, and treatment history tracking
- **Emergency Coordination** - Hospital and clinic referrals with coordination services for complex cases
- **Mobile-First Design** - Native iOS and Android apps with seamless user experience
- **Enterprise Security** - Hospital-grade data protection and Swiss privacy compliance
- **Specialized Services** - Travel medicine, nutrition counseling, respiratory conditions, musculoskeletal disorders
- **Swisscom Integration** - Easypay billing system for simplified payment processing

*Built for Swiss healthcare standards with focus on accessibility, quality, and patient data protection.*

**Key Medical Specialties:**
- General Medicine & Emergency Care
- Respiratory Conditions (Cough, Bronchitis, Colds)
- Musculoskeletal Disorders (Back, Shoulder, Knee Pain)
- Urinary Tract Infections
- Neurological Conditions (Sciatica, Headaches)
- Nutrition & Weight Management
- Travel Medicine & Vaccination Consulting

**Live Platform:** [eedoctors.net](https://www.eedoctors.net/)
**Mobile Apps:** Available on iOS App Store and Google Play Store
**Pricing:** CHF 3.80/min (EUR 3.40/min) with 20-minute cap
**Coverage:** Switzerland, Germany, Austria
**Average Consultation:** 12 minutes
**Medical Team:** 25 licensed physicians`,
  thumbnailUrl: eeDoctorsThumbnail,
  videoUrl: './videos/eeDoctors.mp4',
  technologies: ['React Native', 'WebRTC', 'Swiss Payment APIs', 'Medical Compliance', 'Video Streaming', 'Secure Messaging', 'Digital Prescriptions', 'Health Records'],
  category: 'Telehealth',
  completionDate: new Date(2024, 0, 10) // January 10, 2024
}),

 new ProjectModel({
  id: '4',
  title: 'Hey Dividend',
  shortDescription: 'AI-powered dividend investing and passive income mobile platform',
  detailedDescription: `**AI-Powered Dividend Investing Platform**

Revolutionary mobile application transforming dividend investing through artificial intelligence:

- **AI-Driven Stock Analysis** - Machine learning algorithms analyze dividend-paying stocks for optimal investment opportunities
- **Smart Portfolio Management** - Intelligent portfolio construction focused on dividend yield optimization and risk management
- **Passive Income Tracking** - Real-time dividend income monitoring with projected earnings and yield calculations
- **Dividend Calendar** - Interactive calendar showing upcoming dividend payment dates and ex-dividend dates
- **Stock Screening Engine** - Advanced filtering system to discover high-quality dividend stocks based on custom criteria
- **Investment Recommendations** - AI-powered suggestions for dividend stocks based on user risk profile and investment goals
- **Performance Analytics** - Comprehensive dashboard showing dividend yield, total return, and portfolio performance metrics
- **Educational Content** - Built-in learning resources about dividend investing strategies and market analysis
- **News & Market Updates** - Real-time financial news and market insights relevant to dividend investing
- **Watchlist Management** - Track potential dividend investments with price alerts and dividend announcements
- **Income Projections** - Calculate future passive income based on current holdings and reinvestment strategies
- **Tax Optimization** - Tools to help optimize dividend tax implications and maximize after-tax returns
- **Risk Assessment** - AI-powered risk analysis of dividend sustainability and payout ratios
- **Social Features** - Community insights and expert dividend investing strategies sharing

*Built with React Native for cross-platform compatibility, integrating financial APIs, machine learning models, and real-time market data.*

**Key Features:**
- AI-powered dividend stock analysis and recommendations
- Real-time portfolio tracking and performance monitoring
- Dividend calendar with payment scheduling
- Advanced stock screening and filtering tools
- Passive income projection and goal setting
- Educational resources and market insights
- Social community for dividend investors
- Tax optimization guidance and tools

**Platform Foundation:** [heydividend.com](https://www.heydividend.com/)
**Mobile App:** React Native (iOS & Android)
**Target Audience:** Dividend investors seeking passive income optimization
**AI Integration:** Machine learning for stock analysis and recommendations
**Data Sources:** Real-time financial market APIs and dividend databases`,
  thumbnailUrl: heydividend,
  videoUrl: './videos/fintech.mp4',
  technologies: ['React Native', 'AI/ML APIs', 'Financial Data APIs', 'Real-time Analytics', 'Push Notifications', 'Secure Authentication', 'Chart Libraries', 'Redux'],
  category: 'Fintech',
  completionDate: new Date(2023, 11, 5) // December 5, 2023
}),

 new ProjectModel({
  id: '5',
  title: 'Papa Score',
  shortDescription: 'Comprehensive football streaming app with live matches, insights, and news',
  detailedDescription: `**Football Streaming & Sports Analytics Platform**

Ultimate football companion app delivering live streaming and comprehensive match coverage:

- **Live Match Streaming** - High-quality live streaming of football matches across major leagues worldwide
- **Multi-League Coverage** - Premier League, La Liga, Serie A, Bundesliga, Champions League, and international tournaments
- **Real-Time Match Insights** - Live statistics, player performance data, and tactical analysis during matches
- **Comprehensive News Hub** - Breaking football news, transfer updates, and expert analysis from global sources
- **Interactive Match Center** - Live scores, goal notifications, and minute-by-minute match commentary
- **League Standings & Fixtures** - Complete league tables, upcoming fixtures, and match scheduling across all competitions
- **Player Statistics** - Detailed player profiles, performance metrics, and career statistics
- **Team Analytics** - In-depth team analysis, formation tracking, and tactical insights
- **Video Highlights** - Match highlights, goal compilations, and key moment replays
- **Push Notifications** - Real-time alerts for goals, red cards, match start times, and breaking news
- **Favorites System** - Follow your favorite teams and players with personalized content feeds
- **Social Integration** - Share match moments, discuss games, and connect with fellow football fans
- **Multi-Language Support** - Available in multiple languages for global football audience
- **Offline Mode** - Download highlights and news for offline viewing
- **Premium Features** - Ad-free streaming, exclusive content, and enhanced video quality options

*Built with Flutter for cross-platform performance, integrating multiple sports APIs, video streaming protocols, and real-time data synchronization.*

**Key Features:**
- HD live streaming with adaptive quality
- Comprehensive league and tournament coverage
- Real-time match statistics and analytics
- Breaking news and transfer updates
- Interactive match commentary and insights
- Player and team performance tracking
- Social features for fan engagement
- Personalized content recommendations

**Platform:** iOS Mobile Application
**Streaming Quality:** HD with adaptive bitrate streaming
**Coverage:** Global football leagues and tournaments
**Real-Time Data:** Live scores, statistics, and match events
**Content:** News, highlights, analysis, and exclusive footage`,
  thumbnailUrl: PapaScore,
  videoUrl: './videos/football.mp4',
  technologies: ['Flutter', 'Video Streaming APIs', 'Sports Data APIs', 'Push Notifications', 'Real-time Analytics', 'Social Integration', 'Offline Storage', 'WebRTC'],
  category: 'Sports & Entertainment',
  completionDate: new Date(2023, 10, 18) // November 18, 2023
}),
    
new ProjectModel({
  id: '6',
  title: 'Hubavet - Veterinary Telemedicine Platform',
  shortDescription: 'Revolutionary telehealth platform connecting veterinarians with pet owners remotely',
  detailedDescription: `**Veterinary Telemedicine Platform**

Transform veterinary care with modern telehealth solutions:

- **Remote Consultations** - Video calls between veterinarians and pet owners from anywhere
- **Flexible Scheduling** - Vets set their own availability and work on their own terms  
- **Automated Payments** - Secure payment processing with 1-business-day deposits
- **Mobile App Integration** - Free mobile app for patients to connect instantly
- **No Office Required** - Work from home or anywhere with just a camera and browser
- **Custom Rate Setting** - Veterinarians control their consultation fees
- **Revenue Expansion** - Additional income source without office overhead costs
- **Simple Setup** - No complicated installation, ready to use immediately

*Founded by Dr. Isaac Atalla, combining veterinary expertise with innovative technology to make pet care more accessible and convenient.*

**Key Links:**
- Platform: [hubavet.com](https://www.hubavet.com/) 
- Demo Request: Available on website
- Founded by veterinarian for veterinarians`,
  thumbnailUrl: hubavetThumbnail,
  videoUrl: './videos/hubavet.mp4',
  technologies: ['Telehealth', 'Video Conferencing', 'Payment Processing', 'Mobile App', 'Web Platform'],
  category: 'Healthcare Technology',
  completionDate: new Date(2023, 10, 18)
}),
    
new ProjectModel({
  id: '7',
  title: 'IndieFilmsRus',
  shortDescription: 'Independent film streaming platform supporting emerging filmmakers',
  detailedDescription: `**Independent Film Streaming Platform**

Discover and support the next generation of independent filmmakers:

- **Diverse Film Library** - Wide selection of indie films across all genres (drama, comedy, thriller, documentary)
- **Multi-Platform Access** - Stream on iOS, Android, iPad, Mac, and Apple Vision Pro
- **Flexible Viewing Options** - Stream instantly, download for offline viewing, rent or purchase films
- **Filmmaker Support** - Platform dedicated to amplifying voices of emerging creators
- **Secure Payments** - Integrated payment options for rentals and purchases
- **Content Range** - From micro shorts to full-length features
- **Community Focus** - Building a thriving indie film community
- **Easy Discovery** - User-friendly interface for seamless movie browsing and playback
- **All Indie, All the Time** - Exclusively independent content not found in mainstream theaters
- **Creator Spotlight** - Showcasing talented filmmakers who deserve recognition

*Built with Flutter for cross-platform compatibility, supporting independent cinema and meaningful storytelling.*

**Key Links:**
- Website: [IndieFilmsrUs(https://indiefilmsrus.com/)
- Android App: [Android](https://play.google.com/store/apps/details?id=com.lisa.indie_films_r_us&hl=en)
- iOS App: [IOS](https://apps.apple.com/pk/app/indiefilmsrus/id6739507017)
- Developer: Indie Films R Us LLC
- Privacy Policy: https://indiefilmsrus.com/privacy`,
  thumbnailUrl: indieFilmsRus,
  videoUrl: './videos/indieapp.mp4',
  technologies: ['Flutter', 'Streaming', 'Payment Integration', 'Cross-Platform', 'Video Playback'],
  category: 'Entertainment',
  completionDate: new Date(2023, 10, 18) // November 18, 2023
}),
new ProjectModel({
  id: '8',
  title: 'Momoyoga App',
  shortDescription: 'Comprehensive yoga teaching and studio management platform',
  detailedDescription: `**Yoga Teaching & Studio Management Platform**

The complete solution for yoga teachers and studios to organize their practice:

- **Class Booking & Scheduling** - Let students book and pay for classes online anytime
- **Payment Processing** - All-in-one transaction management with recurring payments and flexible pricing
- **Online Teaching Integration** - Seamlessly connect with Zoom, YouTube Live, Google Meet, or Vimeo
- **Video on Demand** - Pre-recorded classes available for students to watch at their convenience
- **Mobile App for Students** - Free iOS and Android app for easy class access and booking
- **Website Integration** - Easy integration with WordPress, Squarespace, Wix, Joomla, or JavaScript websites
- **Teacher Profile Pages** - Showcase your teaching style and offerings on personalized pages
- **Studio Management** - Comprehensive dashboard for managing multiple classes and instructors
- **Balance-Focused Design** - Built by yoga community experts who understand the importance of balance
- **Free to Start** - Multiple plan options including free tier with no strings attached

*Created for the yoga community by people who understand yoga teaching, giving instructors more time on the mat.*

**Key Links:**
- Platform: [momoyoga.com](https://www.momoyoga.com/)
- Registration: [Registration](https://momoyoga.com/registeryogastudio)
- Mobile App: [Android](https://play.google.com/store/apps/details?id=com.momostudio.momoyoga&hl=en_US) - [IOS](https://apps.apple.com/us/app/momoyoga/id1233882505)
- Website Integration: Supports WordPress, Squarespace, Wix, Joomla
- Support: Expert guidance from yoga community specialists`,
  thumbnailUrl:momoyogaThumbnail,
  videoUrl: './videos/monoyoga.mp4',
 technologies: ['JavaScript', 'React', 'Node.js', 'PHP', 'MySQL', 'Mobile Apps', 'Payment APIs', 'Video Streaming APIs'],
  category: 'Health & Fitness',
  completionDate: new Date(2023, 10, 18) // November 18, 2023
}),
   
new ProjectModel({
  id: '9',
  title: 'Nova App',
  shortDescription: 'Frustration-free telemedicine software platform for healthcare providers',
  detailedDescription: `**Telemedicine Software Platform**

Simple and secure telehealth solution for healthcare providers:

- **Device Flexibility** - See patients virtually from any device with internet connection
- **No Download Required** - Patients click a link to enter waiting room, no app download needed
- **Browser-Based** - Works directly in web browser without plugins or installations
- **HIPAA Compliant** - Meets HIPAA, GDPR, PHIPA/PIPEDA, and HITECH security regulations
- **Global Accessibility** - Use Nova worldwide with regulatory compliance
- **Business Associate Agreement** - Free BAA generation to protect your practice
- **Location Independence** - Take calls from office, home, or anywhere with internet
- **In-Person Feel** - Telehealth appointments designed to feel like in-person visits
- **Free Trial** - 30-day free trial with premium features available on upgrade
- **Simple Setup** - Virtual practice ready in just a couple of clicks
- **Universal Access** - Accessible to everyone without technical barriers

*Designed to eliminate frustration from telemedicine, making virtual healthcare as simple as clicking a link.*

**Key Links:**
- Platform: [novatelehealth.com](https://www.novatelehealth.com/)
- Free Trial: 30-day trial available
- BAA Download: Available after signup
- Global Compliance: HIPAA, GDPR, PHIPA/PIPEDA, HITECH
- No Download Required: Browser-based solution`,
  thumbnailUrl: NOVAThumbnail,
  videoUrl: './videos/Nova.mp4',
  technologies: ['WebRTC', 'React', 'Node.js', 'HIPAA Compliance', 'Real-time Communication', 'Cross-Platform'],
  category: 'Healthcare Technology',
  completionDate: new Date(2023, 10, 18) // November 18, 2023
}),
  new ProjectModel({
  id: '10',
  title: 'PangoVet App',
  shortDescription: 'Online veterinary consultation platform connecting pet owners with certified vets',
  detailedDescription: `**Veterinary Telehealth Platform**

Professional online veterinary consultation service for pet owners:

- **20-Minute Video Calls** - Direct video consultations with licensed veterinary experts
- **Certified Veterinarians** - Access to qualified veterinary professionals online
- **Pet Health Navigation** - Expert guidance for various pet health issues and concerns
- **Affordable Consultation** - Cost-effective alternative to in-person vet visits
- **Personalized Advice** - Tailored recommendations specific to your pet's needs
- **Complement Regular Care** - Designed to enhance, not replace, your pet's regular veterinarian
- **Remote Access** - Reach veterinary expertise from anywhere, especially remote locations
- **Question & Answer Format** - Ask all your questions and raise concerns about your pet
- **Educational Focus** - Helping pet owners understand and navigate health issues
- **No Prescription Services** - Focuses on consultation and advice rather than prescriptions
- **Convenient Access** - Available when you can't get to a regular vet immediately

*Created by the team behind Catster & Dogster, PangoVet bridges the gap between pet owners and veterinary expertise through accessible online consultations.*

**Key Links:**
- Platform: [pangovet.com](https://pangovet.com/)
- Service: 20-minute video calls with vets
- Focus: Pet health navigation and consultation
- Team: From creators of Catster & Dogster
- Mission: Enhance pet health and welfare through online veterinary access`,
  thumbnailUrl: pangoVetThumbnail,
  videoUrl: './videos/PangoVet.mp4',
  technologies: ['Flutter', 'Video Calling', 'Real-time Communication', 'Veterinary Platform', 'Mobile Health'],
  category: 'Healthcare Technology',
  completionDate: new Date(2023, 10, 18) // November 18, 2023
}),
  new ProjectModel({
  id: '11',
  title: 'Pawssum App',
  shortDescription: 'Australia\'s largest mobile veterinary care booking platform',
  detailedDescription: `**Mobile Veterinary Care Platform**

On-demand veterinary services delivered to your home across Australia:

- **Mobile Vet Services** - Professional veterinarians come directly to your home
- **Comprehensive Care** - Vaccinations, health checks, emergency care, euthanasia services
- **Wide Service Range** - Puppy/kitten care, nail clipping, microchipping, blood testing, DNA testing
- **Telepet Video Calls** - Remote consultations via video call/chat
- **National Coverage** - Available in Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, Newcastle, Gold Coast, Auckland
- **Extended Hours** - Open 7 days a week from 7:30am to 10:30pm
- **Transparent Pricing** - Affordable mobile vet services with clear pricing structure
- **Trusted Network** - Australia's largest network of mobile vet care providers
- **Quality Tools** - Free pet age calculators, quality of life assessments
- **Emergency Services** - After-hours mobile vet and emergency care available
- **Stress-Free Experience** - Reduces travel stress for pets and owners

*Founded in 2016 with the mission to provide affordable, available, and accessible home vet services across Australia.*

**Key Links:**
- Platform: [www.pawssum.com.au](https://www.pawssum.com.au/)
- Booking: Phone 1300 343 580 or online booking
- Coverage: Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra, Newcastle, Gold Coast, Auckland
- Hours: 7:30am-10:30pm, 7 days a week
- Services: Mobile vet, telepet video calls, emergency care
- Founded: 2016 - Australia's largest mobile vet network`,
  thumbnailUrl: pawssumThumbnail,
  videoUrl: './videos/pawssum.mp4',
  technologies: ['Flutter', 'Booking System', 'Video Calling', 'Payment Processing', 'GPS Location', 'Real-time Scheduling'],
  category: 'Healthcare Technology',
  completionDate: new Date(2023, 10, 18) // November 18, 2023
}),
   new ProjectModel({
    id: '12',
    title: 'Vetpass App',
    shortDescription: 'Comprehensive veterinary platform connecting pet owners with vets and AI-powered pet care',
    detailedDescription: `**Vetpass - All-in-One Pet Care Platform**

The global platform and app for pet owners, veterinarians, pet service providers, and pet-friendly businesses that revolutionizes pet care management:

• **AI-Powered Health Tools** - AI-Pet Symptom Checker and AI-Nutrition Advisor for health insights and dietary recommendations
• **Comprehensive Pet Profiles** - Tools for pet management include creating pet profiles and storing medical records
• **Veterinary Network** - Connects users with over 100,000+ pet service providers and 52,000+ veterinary clinics
• **Online Consultations** - Free chat with veterinarians, video calls, and appointment booking
• **Multi-Platform Access** - Available on iOS, Android, and web platforms
• **Social Features** - Pet social media, forums, and community connections
• **Professional Tools** - Supports veterinarians with all the learning and practice management tools they need
• **Award-Winning** - Outstanding Pet Care App Award 2023 winner

**Platform Links:**
• **Website:** [vetpass.com](https://vetpass.com/)
• **Android (Pet Owners):** [Google Play Store](https://play.google.com/store/apps/details?id=com.vetpass&hl=en&gl=US)
• **Android (Veterinarians):** [Google Play Store](https://play.google.com/store/apps/details?id=com.vetpass.vet&hl=en&gl=US)
• **iOS (Pet Owners):** [App Store](https://apps.apple.com/us/app/vetpass/id1542015125)
• **iOS (Veterinarians):** [App Store](https://apps.apple.com/in/developer/vetpass-ltd/id1542015337)

*Multi-award winning platform serving pet owners, veterinarians, and pet service providers globally with AI-powered health insights and comprehensive pet care management.*`,
    thumbnailUrl: vetpassThumbnail,
    videoUrl: './videos/vetpass.mp4',
    technologies: ['React Native', 'Node.js', 'AI/ML', 'WebRTC', 'Cloud Database', 'Push Notifications', 'Geolocation', 'Payment Integration'],
    category: 'Healthcare',
    completionDate: new Date(2023, 10, 18) // November 18, 2023
}),
   new ProjectModel({
    id: '13',
    title: 'Yoyo Apps',
    shortDescription: 'AI-powered multilingual learning platform with personalized speaking practice and pronunciation feedback',
    detailedDescription: `**Yoyo Apps - AI-Powered Language Learning Platform**

Revolutionary educational platform connecting students and tutors through AI-driven speaking practice across multiple languages:

• **Multi-Language Support** - English, Spanish, French, German, Mandarin, Japanese, Russian, and Korean language learning
• **AI-Powered Pronunciation Analysis** - Advanced AI trained on thousands of hours of native speaking for accurate pronunciation, fluency, and intonation assessment
• **Dual-App Architecture** - Separate apps for students and tutors with seamless integration and communication
• **Personalized Learning** - AI-driven adaptive learning that provides instant feedback and targeted coaching based on individual progress
• **Teacher-Led Management** - Comprehensive tools for educators to assign phrases, track student progress, and manage curricula
• **Automated Reporting** - Monthly progress reports for parents and detailed analytics for teachers
• **Safe Learning Environment** - Secure, closed platform with no peer-to-peer interaction, voice recording storage, or personal data collection
• **Evidence-Based Approach** - Combines spaced practice with AI-driven personalization for optimal learning outcomes
• **Cross-Platform Access** - Available on iOS and Android with seamless synchronization

**Platform Links:**
• **Website:** [yoyospeak.com](https://yoyospeak.com/)
• **iOS (Students):** [App Store - Yoyo Speak](https://apps.apple.com/gb/app/yoyo-speak/id6639612813)
• **iOS (Tutors):** [App Store - Yoyo Tutor](https://apps.apple.com/gb/app/yoyo-tutor/id6639612761)
• **Android (Students):** [Google Play - Yoyo Speak](https://play.google.com/store/apps/details?id=com.yoyospeak.yoyo)
• **Android (Tutors):** [Google Play - Yoyo Tutor](https://play.google.com/store/apps/details?id=com.yoyotutor.yoyo)

*Advanced AI language learning platform designed for schools and educational institutions, featuring real-time pronunciation feedback and comprehensive progress tracking across 8 major languages.*`,
    thumbnailUrl: yoyo,
    videoUrl: './videos/yoyo.mp4',
    technologies: ['React Native', 'AI/ML', 'Speech Recognition', 'Natural Language Processing', 'Cloud Computing', 'Real-time Analytics', 'Push Notifications', 'Secure Authentication'],
    category: 'Education',
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