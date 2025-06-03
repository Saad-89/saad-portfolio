// src/data/repositories/skillsData.js

import { SkillModel } from '../models/SkillModel.js';

const skillsData = {
  skills: [
    // Mobile Development
    {
      name: "Flutter",
      category: "Mobile Development",
      proficiency: 0.95,
      logoPath: "/images/logos/flutter_logo.png",
      description: "Cross-platform mobile app development with beautiful UIs",
    },
    {
      name: "Dart",
      category: "Mobile Development",
      proficiency: 0.90,
      logoPath: "/images/logos/dart_logo.png",
      description: "Primary programming language for Flutter development",
    },
    {
      name: "React Native",
      category: "Mobile Development",
      proficiency: 0.75,
      logoPath: "/images/logos/react_native_logo.png",
      description: "Cross-platform mobile development with JavaScript",
    },
    {
      name: "iOS Swift",
      category: "Mobile Development",
      proficiency: 0.70,
      logoPath: "/images/logos/swift_logo.png",
      description: "Native iOS app development",
    },
    {
      name: "Android Kotlin",
      category: "Mobile Development",
      proficiency: 0.75,
      logoPath: "/images/logos/kotlin_logo.png",
      description: "Native Android app development",
    },

    // Backend & APIs
    {
      name: "Firebase",
      category: "Backend & APIs",
      proficiency: 0.90,
      logoPath: "/images/logos/firebase_logo.png",
      description: "Backend-as-a-Service platform for mobile apps",
    },
    {
      name: "Node.js",
      category: "Backend & APIs",
      proficiency: 0.80,
      logoPath: "/images/logos/nodejs_logo.png",
      description: "Server-side JavaScript runtime environment",
    },
  ]
};

export class SkillsRepository {
  // Simply return all skills data
  static getAllSkills() {
    return skillsData.skills.map(skill => SkillModel.fromJson(skill));
  }
}