// src/data/repositories/experienceData.js

import { ExperienceModel } from '../models/ExperienceModel.js';

class ExperienceData {
  static experiences = [
    new ExperienceModel({
      id: 'exp_001',
      company: 'Independent',
      position: 'Senior Software Engineer',
      duration: 'Jan 2024 - Present',
      location: 'Remote',
      type: 'Freelance',
      description:
        'Running my own practice, helping startups and businesses turn ideas into launched products. I handle the whole build — websites and apps, AI-powered features, and the automation that saves teams time — with a focus on real business outcomes.',
      responsibilities: [
        'Leading end-to-end product builds, from first idea to launch and support',
        'Building custom websites, web apps, and mobile apps for international clients',
        'Adding AI features — assistants, chatbots, and AI agents (Claude Code, MCP connectors)',
        'Automating manual workflows to save clients hours every week',
        'Advising founders on scope, priorities, and how to get to market faster',
        'Building long-term partnerships through consistent delivery and ongoing support',
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
      position: 'Software Engineer',
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
    new ExperienceModel({
      id: 'exp_003',
      company: 'Techorphic',
      position: 'Software Developer',
      duration: 'Mar 2020 - Jan 2021',
      location: 'Pakistan',
      type: 'Full-time',
      description:
        'Started my professional journey in mobile development at a growing software company. Built real client applications while learning industry standards and best practices in a collaborative team environment.',
      responsibilities: [
        'Built cross-platform mobile apps with Flutter for client projects',
        'Developed native Android features using Java and Kotlin',
        'Worked through the full development lifecycle, from planning to deployment',
        'Integrated third-party APIs and implemented local data persistence',
        'Contributed to code reviews and learned professional development practices',
      ],
      technologies: [
        'Flutter',
        'Dart',
        'Java',
        'Kotlin',
        'Android Studio',
        'Firebase',
        'SQLite',
        'REST APIs',
        'Git',
      ],
      companyLogo: null,
      companyWebsite: 'https://techorphic.com',
      isCurrentJob: false,
    }),
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