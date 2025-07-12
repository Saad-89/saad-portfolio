// src/data/repositories/skillsData.js

import { SkillModel } from '../models/SkillModel.js';

const skillsData = {
  skills: [
    // Mobile Development
    {
      name: "Flutter",
      category: "Mobile Development",
      proficiency: 0.95,
      logoPath: "./techIcons/Flutter.png",
      description: "Cross-platform mobile app development with beautiful UIs",
    },
    {
      name: "Dart",
      category: "Mobile Development",
      proficiency: 0.90,
      logoPath: "./techIcons/Dart.png",
      description: "Primary programming language for Flutter development",
    },
    {
      name: "React Native",
      category: "Mobile Development",
      proficiency: 0.75,
      logoPath: "./techIcons/React.png",
      description: "Cross-platform mobile development with JavaScript",
    },
    {
      name: "JavaScript",
      category: "Programming Language",
      proficiency: 0.70,
      logoPath: "./techIcons/JavaScript.png",
      description: "Web Programming Language",
    },
    {
      name: "Type Script",
      category: "Language",
      proficiency: 0.75,
      logoPath: "./techIcons/TypeScript.png",
      description: "Web Language",
    },

    // Backend & APIs
    {
      name: "Firebase",
      category: "Backend & APIs",
      proficiency: 0.90,
      logoPath: "./techIcons/Firebase.png",
      description: "Backend-as-a-Service platform for mobile apps",
    },
    {
      name: "Node.js",
      category: "Backend & APIs",
      proficiency: 0.80,
      logoPath: "./techIcons/Node.js.png",
      description: "Server-side JavaScript runtime environment",
    },
    // Frontend & Styling
    {
      name: "HTML",
      category: "Frontend & Styling",
      proficiency: 0.85,
      logoPath: "./techIcons/HTML5.png",
      description: "Markup language for creating web pages and applications",
    },
    {
      name: "CSS",
      category: "Frontend & Styling",
      proficiency: 0.80,
      logoPath: "./techIcons/CSS3.png",
      description: "Styling language for designing web interfaces",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend & Styling",
      proficiency: 0.75,
      logoPath: "./techIcons/Tailwind CSS.png",
      description: "Utility-first CSS framework for rapid UI development",
    },
    
    // Design & Prototyping
    {
      name: "Figma",
      category: "Design & Prototyping",
      proficiency: 0.70,
      logoPath: "./techIcons/Figma.png",
      description: "Collaborative design and prototyping tool",
    },
    
    // Version Control & Collaboration
    {
      name: "GitHub",
      category: "Version Control & Collaboration",
      proficiency: 0.85,
      logoPath: "./techIcons/GitHub.png",
      description: "Version control and collaborative development platform",
    },
    {
      name: "Jira",
      category: "Version Control & Collaboration",
      proficiency: 0.65,
      logoPath: "./techIcons/Jira.png",
      description: "Project management and issue tracking tool",
    },
    
    // Database & State Management
    {
      name: "MongoDB",
      category: "Database & State Management",
      proficiency: 0.70,
      logoPath: "./techIcons/MongoDB.png",
      description: "NoSQL document database for modern applications",
    },
    {
      name: "Redux",
      category: "Database & State Management",
      proficiency: 0.65,
      logoPath: "./techIcons/Redux.png",
      description: "State management library for JavaScript applications",
    },
    
    // Deployment & Hosting
    {
      name: "Vercel",
      category: "Deployment & Hosting",
      proficiency: 0.75,
      logoPath: "./techIcons/Vercel.png",
      description: "Frontend deployment platform with serverless functions",
    },
  ]
};

export class SkillsRepository {
  // Simply return all skills data
  static getAllSkills() {
    return skillsData.skills.map(skill => SkillModel.fromJson(skill));
  }
}