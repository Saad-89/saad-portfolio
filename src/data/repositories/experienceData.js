// src/data/repositories/experienceData.js

import { ExperienceModel } from '../models/ExperienceModel.js';

class ExperienceData {
  static experiences = [
    new ExperienceModel({
      id: 'exp_001',
      company: 'Freelance',
      position: 'Senior Mobile App & Web Developer',
      duration: 'Jan 2024 - Present',
      location: 'Remote',
      type: 'Freelance',
      description:
        'Running my own development practice, delivering comprehensive mobile and web solutions to international clients. Specializing in cross-platform mobile apps and modern web applications with focus on scalable architecture and exceptional user experience.',
      responsibilities: [
        'Managing full-stack development projects including mobile apps and responsive websites',
        'Delivering custom Flutter mobile solutions and React/Next.js web applications',
        'Building e-commerce platforms, healthcare apps, and educational web portals',
        'Implementing complex features like real-time chat, payment integration, and AI-powered functionalities',
        'Providing technical consultation and full-stack architecture planning for startups',
        'Creating responsive web designs and progressive web applications (PWAs)',
        'Building long-term partnerships with clients through consistent delivery and ongoing support',
      ],
      technologies: [
        'Flutter',
        'Dart',
        'React',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'Node.js',
        'Express.js',
        'Firebase',
        'MongoDB',
        'PostgreSQL',
        'REST APIs',
        'GraphQL',
        'Provider',
        'Bloc',
        'Riverpod',
        'Tailwind CSS',
        'AWS',
        'Git',
      ],
      companyLogo: null,
      companyWebsite: null,
      isCurrentJob: true,
    }),
    new ExperienceModel({
      id: 'exp_002',
      company: 'Codolis',
      position: 'Senior Flutter & Web Developer',
      duration: 'Feb 2021 - Dec 2023',
      location: 'Netherlands (Remote)',
      type: 'Full-time',
      description:
        'Worked with a dynamic Dutch development team to create innovative mobile and web solutions for European markets. Contributed to multiple high-impact projects while collaborating across different time zones and cultural contexts.',
      responsibilities: [
        'Developed and maintained 6+ Flutter applications and 4+ web platforms for European clients',
        'Built responsive websites and progressive web applications using modern frameworks',
        'Led mobile and web development initiatives while mentoring junior team members',
        'Implemented robust testing strategies achieving 95% code coverage across projects',
        'Collaborated with international teams using agile methodologies and modern workflows',
        'Optimized application performance and resolved complex technical challenges',
        'Participated in architectural decisions for both mobile and web technology stacks',
        'Conducted comprehensive code reviews and established development best practices',
      ],
      technologies: [
        'Flutter',
        'Dart',
        'React',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'Node.js',
        'Firebase',
        'REST APIs',
        'Provider',
        'Bloc',
        'Tailwind CSS',
        'Material-UI',
        'Dio',
        'Hive',
        'SQLite',
        'Git',
        'Jira',
        'Figma',
      ],
      companyLogo: '/images/companies/codolis.png',
      companyWebsite: 'https://codolis.com',
    }),
    // new ExperienceModel({
    //   id: 'exp_003',
    //   company: 'Techorphic',
    //   position: 'Mobile Application Developer',
    //   duration: 'Mar 2020 - Jan 2021',
    //   location: 'Pakistan',
    //   type: 'Full-time',
    //   description:
    //     'Started my professional journey in mobile development at a growing Pakistani software company. Gained valuable experience in building mobile applications while learning industry standards and best practices in a collaborative environment.',
    //   responsibilities: [
    //     'Developed native Android applications using Java and Kotlin',
    //     'Built cross-platform mobile apps with Flutter for various client projects',
    //     'Collaborated with senior developers to implement complex application features',
    //     'Participated in the complete development lifecycle from planning to deployment',
    //     'Worked on UI/UX implementation following Material Design guidelines',
    //     'Integrated third-party APIs and implemented data persistence solutions',
    //     'Contributed to code reviews and learned professional development practices',
    //     'Supported app maintenance and bug fixes for existing client applications',
    //   ],
    //   technologies: [
    //     'Flutter',
    //     'Dart',
    //     'Java',
    //     'Kotlin',
    //     'Android Studio',
    //     'Firebase',
    //     'SQLite',
    //     'REST APIs',
    //     'Provider',
    //     'Shared Preferences',
    //     'Git',
    //     'Postman',
    //   ],
    //   companyLogo: '/images/companies/techorphic.png',
    //   companyWebsite: 'https://techorphic.com',
    //   isCurrentJob: false,
    // }),
  ];

  // Helper methods
  static getExperienceById(id) {
    return this.experiences.find(exp => exp.id === id) || null;
  }

  static getCurrentJobs() {
    return this.experiences.filter(exp => exp.isCurrentJob);
  }

  static getExperiencesByType(type) {
    return this.experiences.filter(exp => exp.type === type);
  }

  static getAllTechnologies() {
    const allTechs = new Set();
    this.experiences.forEach(exp => {
      exp.technologies.forEach(tech => allTechs.add(tech));
    });
    return Array.from(allTechs).sort();
  }
}

export default ExperienceData;