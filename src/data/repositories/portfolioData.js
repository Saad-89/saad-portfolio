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
import PapaScore from '../../../src/assets/images/PapaScore.png';
import pawssumThumbnail from '../../../src/assets/images/pawssumThumbnail.png';
import pangoVetThumbnail from '../../../src/assets/images/pangoVetThumbnail.png';
import yoyo from '../../../src/assets/images/yoyo.png';

export const portfolioData = {
  projects: [
    new ProjectModel({
      id: '1',
      title: 'Car Wash App',
      shortDescription: 'Mobile-first SaaS platform for car wash operators',
      tagline:
        'A mobile-first SaaS platform that lets car washes sell memberships, activate equipment, and grow revenue — without a pay station.',
      detailedDescription:
        'A white-label SaaS platform that modernizes how car washes sell, activate, and grow — replacing rigid pay-station hardware with a fast mobile experience and a configurable operator dashboard.',
      challenge:
        'Car wash operators were locked into rigid pay-station hardware with no easy way to sell memberships, run promotions, or understand their customers. They needed a modern, white-label platform their customers could use in seconds.',
      approach:
        'I designed a no-download mobile web experience built around the fastest possible signup, then connected it to GPS-based wash activation and contactless payments — so a customer could go from QR scan to clean car without touching a kiosk. The backend became a configurable, multi-location dashboard any operator could launch under their own brand.',
      contributions: [
        'Built the customer-facing mobile web app — QR signup, single washes, and membership plans',
        'Implemented GPS-aware wash activation and contactless payment flows',
        'Created the operator dashboard for pricing, locations, users, and analytics',
        'Added marketing tooling — referrals, promotions, and SMS/email campaigns',
        'Set up white-label theming so each operator ships with their own brand',
      ],
      role: 'Software engineer — owned the mobile web app, the operator dashboard, and the payment & activation integrations.',
      liveUrl: 'https://carwashapp.com/',
      thumbnailUrl: carwashThumbnail,
      videoUrl: './videos/carwash.mp4',
      technologies: ['React', 'Node.js', 'QR Technology', 'GPS Integration', 'Payment APIs', 'SMS/Email APIs', 'Real-time Analytics', 'Cloud Infrastructure'],
      category: 'SaaS Platform',
      completionDate: new Date(2024, 2, 15),
    }),

    new ProjectModel({
      id: '2',
      title: 'PangoVet',
      shortDescription: 'Online veterinary video consultations',
      tagline:
        'Online vet consultations that connect worried pet owners with certified veterinarians over a 20-minute video call.',
      detailedDescription:
        'A veterinary telehealth app from the team behind Catster & Dogster, giving pet owners fast, trustworthy access to licensed vets through guided video consultations.',
      challenge:
        "Pet owners often can't reach a vet when they need quick, trustworthy guidance — especially after hours or in remote areas. The team wanted to make expert advice accessible without trying to replace the family vet.",
      approach:
        'I focused the product on one job done well: getting a pet owner into a smooth, reliable video consultation fast. The flow was built mobile-first with clear expectations — 20-minute calls, advice not prescriptions — so users felt confident before they ever joined a call.',
      contributions: [
        'Built the cross-platform mobile app with Flutter',
        'Integrated real-time video calling for vet consultations',
        'Designed the booking and consultation flow around clarity and trust',
        'Optimized for reliable performance on lower-end devices and networks',
      ],
      role: 'Software engineer — delivered the Flutter app and the video consultation experience.',
      liveUrl: 'https://pangovet.com/',
      thumbnailUrl: pangoVetThumbnail,
      videoUrl: './videos/PangoVet.mp4',
      technologies: ['Flutter', 'Video Calling', 'Real-time Communication', 'Mobile Health'],
      category: 'Healthcare Technology',
      completionDate: new Date(2023, 10, 18),
    }),

    new ProjectModel({
      id: '3',
      title: 'IndieFilmsRus',
      shortDescription: 'Cross-platform indie film streaming',
      tagline:
        "A streaming home for independent film — discover, rent, and own movies you won't find in the mainstream.",
      detailedDescription:
        'A cross-platform streaming product dedicated to independent cinema, giving emerging filmmakers a real home and viewers an easy way to find non-mainstream films.',
      challenge:
        'Independent filmmakers have great work and nowhere built specifically for them, while viewers who want non-mainstream cinema struggle to find it. They needed a true cross-platform streaming product, not just a catalog.',
      approach:
        'I built one Flutter codebase that ships everywhere indie audiences watch — iPhone, iPad, Android, Mac, and Apple Vision Pro — with flexible rent/buy/stream options and offline downloads, so the platform could match the polish people expect from streaming apps.',
      contributions: [
        'Built the cross-platform streaming app (iOS, Android, iPad, Mac, Vision Pro)',
        'Implemented streaming, offline downloads, and rent/purchase flows',
        'Integrated secure payments for rentals and purchases',
        'Created a browsing experience tuned for discovering new titles',
      ],
      role: 'Software engineer — owned the cross-platform app and playback experience.',
      liveUrl: 'https://indiefilmsrus.com/',
      thumbnailUrl: indieFilmsRus,
      videoUrl: './videos/indieapp.mp4',
      technologies: ['Flutter', 'Streaming', 'Payment Integration', 'Cross-Platform', 'Video Playback'],
      category: 'Entertainment',
      completionDate: new Date(2023, 10, 18),
    }),

    new ProjectModel({
      id: '4',
      title: 'Yoyo Apps',
      shortDescription: 'AI-powered language learning for schools',
      tagline:
        'An AI-powered language platform where students practice speaking and get instant pronunciation feedback — with teachers in control.',
      detailedDescription:
        'A dual-app language-learning platform for schools that pairs AI speaking practice with teacher-led management across eight languages, in a privacy-safe environment for young learners.',
      challenge:
        "Schools wanted to give students real speaking practice across many languages, but classroom time is limited and human feedback doesn't scale. They also needed a safe, closed environment with no social risk for young learners.",
      approach:
        'I built a dual-app system — one for students, one for tutors — wired to AI pronunciation analysis so learners get instant, targeted feedback while teachers assign phrases and track progress. Privacy was a first-class constraint: no peer-to-peer contact and no unnecessary data collection.',
      contributions: [
        'Built separate student and tutor apps on shared infrastructure',
        'Integrated AI pronunciation, fluency, and intonation feedback',
        'Built teacher tools for assigning phrases and tracking progress',
        'Implemented automated progress reporting for parents and educators',
        'Designed a closed, privacy-safe environment for young learners',
      ],
      role: 'Software engineer — delivered both apps and the AI feedback integration.',
      liveUrl: 'https://yoyospeak.com/',
      thumbnailUrl: yoyo,
      videoUrl: './videos/yoyo.mp4',
      technologies: ['React Native', 'AI/ML', 'Speech Recognition', 'NLP', 'Cloud Computing', 'Secure Authentication'],
      category: 'Education',
      completionDate: new Date(2023, 10, 18),
    }),

    new ProjectModel({
      id: '5',
      title: 'Hey Dividend',
      shortDescription: 'AI dividend investing & passive income app',
      tagline:
        'A dividend-investing companion that uses AI to help people build and track passive income.',
      detailedDescription:
        'A mobile app that turns scattered market data into clear dividend-investing decisions, with AI-assisted analysis, income projections, and a clean portfolio view.',
      challenge:
        'Dividend investing is powerful but intimidating — scattered data, confusing screeners, and no clear picture of future income. The goal was an app that makes building passive income feel approachable.',
      approach:
        "I built a mobile app that turns raw market data into clear decisions: AI-assisted stock analysis, a dividend calendar, income projections, and a clean portfolio view — so users always know what they hold, what's coming, and what to consider next.",
      contributions: [
        'Built the React Native app for iOS and Android',
        'Integrated financial market and dividend data APIs',
        'Implemented portfolio tracking, the dividend calendar, and income projections',
        'Built AI-assisted screening and recommendation views',
        'Added watchlists, price alerts, and performance analytics',
      ],
      role: 'Software engineer — owned the app, data integrations, and analytics views.',
      liveUrl: 'https://www.heydividend.com/',
      thumbnailUrl: heydividend,
      videoUrl: './videos/fintech.mp4',
      technologies: ['React Native', 'AI/ML APIs', 'Financial Data APIs', 'Real-time Analytics', 'Charts', 'Redux'],
      category: 'Fintech',
      completionDate: new Date(2023, 11, 5),
    }),

    new ProjectModel({
      id: '6',
      title: 'Papa Score',
      shortDescription: 'Live football streaming, scores & news',
      tagline:
        "A football companion app for live streaming, real-time scores, stats, and news across the world's biggest leagues.",
      detailedDescription:
        'A single, fast football app that brings live streaming, real-time match data, and a news hub together so fans never need to juggle multiple apps.',
      challenge:
        'Fans juggle multiple apps for streaming, scores, and news. The vision was a single, fast app that covers matches end-to-end — from live video to minute-by-minute commentary.',
      approach:
        'I built a Flutter app that brings live streaming, real-time match data, and a news hub together with adaptive video quality and instant push notifications — so fans get goals, stats, and stories in one place, without lag.',
      contributions: [
        'Built the Flutter app with HD adaptive live streaming',
        'Integrated real-time sports data — scores, fixtures, standings, and stats',
        'Implemented push notifications for goals and key match events',
        'Built the news hub and a personalized favorites feed',
        'Added offline access for highlights and articles',
      ],
      role: 'Software engineer — delivered the app, streaming, and real-time data layer.',
      liveUrl: '',
      thumbnailUrl: PapaScore,
      videoUrl: './videos/football.mp4',
      technologies: ['Flutter', 'Video Streaming APIs', 'Sports Data APIs', 'Push Notifications', 'Offline Storage', 'WebRTC'],
      category: 'Sports & Entertainment',
      completionDate: new Date(2023, 10, 18),
    }),

    new ProjectModel({
      id: '7',
      title: 'Hubavet',
      shortDescription: 'Telemedicine platform for veterinarians',
      tagline:
        'A telemedicine platform that lets vets consult pet owners from anywhere and set their own terms.',
      detailedDescription:
        'A vet-founded telehealth platform that lets veterinarians offer remote consultations on their own terms, with automated payments and a frictionless patient app.',
      challenge:
        'Many veterinarians want to earn outside the clinic but have no simple way to offer remote consultations, set their rates, and get paid reliably. Founded by a vet, the product had to feel effortless for non-technical professionals.',
      approach:
        'I built a platform where a vet can be consulting within minutes — no office, no install — with video calls, self-set rates, and automated payouts. The patient side is a free, frictionless app so pet owners can connect instantly.',
      contributions: [
        'Built the video consultation platform for vets and pet owners',
        'Implemented flexible scheduling and vet-controlled rate setting',
        'Integrated automated payments with fast deposits',
        'Delivered the companion mobile app for patients',
      ],
      role: 'Software engineer — built the consultation platform, payments, and patient app.',
      liveUrl: 'https://www.hubavet.com/',
      thumbnailUrl: hubavetThumbnail,
      videoUrl: './videos/hubavet.mp4',
      technologies: ['Telehealth', 'Video Conferencing', 'Payment Processing', 'Mobile App', 'Web Platform'],
      category: 'Healthcare Technology',
      completionDate: new Date(2023, 10, 18),
    }),

    new ProjectModel({
      id: '8',
      title: 'EE Doctors',
      shortDescription: 'Swiss on-demand telehealth platform',
      tagline:
        'A Swiss telehealth platform delivering on-demand doctor consultations with digital prescriptions, built to local healthcare standards.',
      detailedDescription:
        'A mobile-first Swiss telehealth platform offering instant doctor chat and video consultations with electronic prescriptions, multilingual support, and hospital-grade security.',
      challenge:
        'Patients in Switzerland wanted fast access to licensed doctors without appointments or waiting rooms — but the product had to meet strict Swiss healthcare, billing, and privacy expectations across three languages.',
      approach:
        'I built a mobile-first platform with free doctor chat and premium video consultations, electronic prescriptions delivered straight to the app, and multilingual support — all wrapped in hospital-grade security and integrated with local billing.',
      contributions: [
        'Built the React Native apps for iOS and Android',
        'Implemented real-time chat and WebRTC video consultations',
        'Built the digital prescription flow, redeemable at any pharmacy',
        'Added multilingual support (German, French, Italian)',
        'Integrated secure, compliant payment and billing',
      ],
      role: 'Software engineer — owned the apps, consultation flows, and prescription system.',
      liveUrl: 'https://www.eedoctors.net/',
      thumbnailUrl: eeDoctorsThumbnail,
      videoUrl: './videos/eeDoctors.mp4',
      technologies: ['React Native', 'WebRTC', 'Payment APIs', 'Medical Compliance', 'Secure Messaging', 'Digital Prescriptions'],
      category: 'Telehealth',
      completionDate: new Date(2024, 0, 10),
    }),

    new ProjectModel({
      id: '9',
      title: 'Momoyoga',
      shortDescription: 'Studio management for yoga teachers',
      tagline:
        'An all-in-one platform that lets yoga teachers and studios schedule classes, take payments, and teach online.',
      detailedDescription:
        'A complete studio-management product for yoga teachers — online booking and payments, live-teaching integrations, video-on-demand, and easy website embeds — so instructors spend less time on admin.',
      challenge:
        "Yoga teachers want to teach, not wrestle with admin. They needed one tool to handle bookings, payments, online classes, and their public presence — without juggling five separate services.",
      approach:
        'I helped build a complete studio-management product: online booking and payments, integrations with Zoom/YouTube/Meet/Vimeo for live classes, video-on-demand, and easy website embeds, plus a free student app — so teachers get more time on the mat.',
      contributions: [
        'Contributed to the web platform and studio dashboard',
        'Built class booking, scheduling, and recurring payment flows',
        'Integrated live-teaching tools and video-on-demand',
        'Implemented website embeds for WordPress, Squarespace, Wix, and more',
      ],
      role: 'Software engineer — worked across the booking, payments, and integration features.',
      liveUrl: 'https://www.momoyoga.com/',
      thumbnailUrl: momoyogaThumbnail,
      videoUrl: './videos/monoyoga.mp4',
      technologies: ['JavaScript', 'React', 'Node.js', 'PHP', 'MySQL', 'Payment APIs', 'Video Streaming APIs'],
      category: 'Health & Fitness',
      completionDate: new Date(2023, 10, 18),
    }),

    new ProjectModel({
      id: '10',
      title: 'Nova',
      shortDescription: 'Frictionless, HIPAA-compliant telemedicine',
      tagline:
        'Frictionless telemedicine — patients join a secure video visit from a link, no downloads, fully HIPAA-compliant.',
      detailedDescription:
        'A browser-based telemedicine platform built to remove friction for patients and providers, with no installs and compliance (HIPAA, GDPR, PHIPA/PIPEDA, HITECH) built in.',
      challenge:
        'Telehealth tools are often clunky and scare off less tech-savvy patients. Providers needed something that just works: no installs, no plugins, and airtight compliance.',
      approach:
        'I built a browser-based platform where patients click a link to enter a waiting room and providers run visits from any device. Compliance was built in from the start, and setup was reduced to a couple of clicks.',
      contributions: [
        'Built the browser-based video visit experience (no downloads)',
        'Implemented the waiting-room and provider call flows with WebRTC',
        'Ensured compliant, secure handling of patient sessions',
        'Kept onboarding to a couple of clicks for providers and patients',
      ],
      role: 'Software engineer — delivered the web platform and real-time video.',
      liveUrl: 'https://www.novatelehealth.com/',
      thumbnailUrl: NOVAThumbnail,
      videoUrl: './videos/Nova.mp4',
      technologies: ['WebRTC', 'React', 'Node.js', 'HIPAA Compliance', 'Real-time Communication', 'Cross-Platform'],
      category: 'Healthcare Technology',
      completionDate: new Date(2023, 10, 18),
    }),

    new ProjectModel({
      id: '11',
      title: 'Dial-a-Vet',
      shortDescription: '24/7 telehealth for pet owners',
      tagline:
        '24/7 video access to licensed vets at a flat fee — built to scale from Australia to four countries.',
      detailedDescription:
        'A web-based veterinary telehealth platform connecting pet owners with licensed vets in minutes at a predictable flat fee, engineered for reliability and international scale.',
      challenge:
        "Pet emergencies don't wait for clinic hours, and in-person visits are expensive. The product needed to connect owners with a real vet in minutes, at a predictable price, reliably enough to grow internationally.",
      approach:
        'I built a web-based video platform with instant booking, a vet-matching flow, and secure payments — engineered for fast connection times and the compliance and scale needed to expand into new markets.',
      contributions: [
        'Built the web platform with WebRTC video consultations',
        'Implemented instant booking and vet-matching',
        'Integrated secure payments with a flat-fee model',
        'Built for reliability and scale across multiple countries',
      ],
      role: 'Software engineer — owned the consultation platform, booking, and payments.',
      liveUrl: 'https://www.dialavet.com/',
      thumbnailUrl: dialavetThumbnail,
      videoUrl: './videos/dialavet.mp4',
      technologies: ['React', 'Node.js', 'WebRTC', 'Payment Gateway', 'Video Streaming', 'Cloud Infrastructure'],
      category: 'Telehealth',
      completionDate: new Date(2024, 1, 20),
    }),

    new ProjectModel({
      id: '12',
      title: 'Pawssum',
      shortDescription: 'On-demand mobile vet care booking',
      tagline:
        'On-demand mobile vet care — book a vet to your door, or a video call, across Australia.',
      detailedDescription:
        'A booking platform that brings veterinary care to the home and offers remote video consultations, coordinating a large network of mobile vet providers across Australian cities.',
      challenge:
        "Taking a pet to the clinic is stressful and not always possible. Pawssum needed a booking platform that brings vets to the home and offers remote video care, coordinating a large provider network across many cities.",
      approach:
        'I built a Flutter app around real-time booking and scheduling, with GPS-based service matching and integrated payments, plus video consultations — so owners can choose between a home visit and a call, any day of the week.',
      contributions: [
        'Built the Flutter booking app for mobile vet services',
        'Implemented real-time scheduling and GPS-based matching',
        'Integrated video consultations (telepet) and secure payments',
        'Supported a multi-city provider network with extended hours',
      ],
      role: 'Software engineer — delivered the booking app and consultation flows.',
      liveUrl: 'https://www.pawssum.com.au/',
      thumbnailUrl: pawssumThumbnail,
      videoUrl: './videos/pawssum.mp4',
      technologies: ['Flutter', 'Booking System', 'Video Calling', 'Payment Processing', 'GPS Location', 'Real-time Scheduling'],
      category: 'Healthcare Technology',
      completionDate: new Date(2023, 10, 18),
    }),

    new ProjectModel({
      id: '13',
      title: 'Vetpass',
      shortDescription: 'All-in-one AI-powered pet care platform',
      tagline:
        "An award-winning all-in-one pet care app — profiles, records, vet connections, and AI-powered health tools.",
      detailedDescription:
        'A multi-sided pet care platform for owners, vets, and providers worldwide, combining AI health tools, medical records, online consultations, and community in one app.',
      challenge:
        'Pet care is fragmented across clinics, records, and services. Vetpass set out to be the single platform for owners, vets, and providers worldwide — with AI tools that actually help with day-to-day decisions.',
      approach:
        'I built a multi-sided platform connecting owners with a large network of vets and providers, layered with AI symptom-checking and nutrition guidance, pet profiles and medical records, and online consultations — across iOS, Android, and web.',
      contributions: [
        'Built the React Native apps for pet owners and veterinarians',
        'Integrated an AI symptom-checker and nutrition advisor',
        'Implemented pet profiles, medical records, and consultations',
        'Connected owners to a large vet and service-provider network',
        'Added community and social features',
      ],
      role: 'Software engineer — delivered the consumer and vet apps and the AI feature integration.',
      liveUrl: 'https://vetpass.com/',
      thumbnailUrl: vetpassThumbnail,
      videoUrl: './videos/vetpass.mp4',
      technologies: ['React Native', 'Node.js', 'AI/ML', 'WebRTC', 'Cloud Database', 'Geolocation', 'Payment Integration'],
      category: 'Healthcare',
      completionDate: new Date(2023, 10, 18),
    }),
  ],

  get categories() {
    return [...new Set(this.projects.map((project) => project.category))];
  },

  getProjectsByCategory(category) {
    return this.projects.filter((project) => project.category === category);
  },

  getProjectBySlug(slug) {
    return this.projects.find((project) => project.slug === slug) || null;
  },

  getAdjacent(slug) {
    const i = this.projects.findIndex((p) => p.slug === slug);
    if (i === -1) return { prev: null, next: null };
    const len = this.projects.length;
    return {
      prev: this.projects[(i - 1 + len) % len],
      next: this.projects[(i + 1) % len],
    };
  },
};
