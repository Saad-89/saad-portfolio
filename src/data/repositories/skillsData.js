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
      name: "React Native",
      category: "Mobile Development",
      proficiency: 0.75,
      logoPath: "./techIcons/React.png",
      description: "Cross-platform mobile development with JavaScript",
    },
    {
      name: "Dart",
      category: "Mobile Development",
      proficiency: 0.90,
      logoPath: "./techIcons/Dart.png",
      description: "Primary programming language for Flutter development",
    },

    // Frontend & Web Development
    {
      name: "React",
      category: "Frontend & Styling",
      proficiency: 0.90,
      logoPath: "./techIcons/React.png",
      description: "Modern JavaScript library for building user interfaces",
    },
    {
      name: "Next.js",
      category: "Frontend & Styling",
      proficiency: 0.75,
      logoPath: "./techIcons/Next.js.png",
      description: "React framework for production-ready applications",
    },
    {
      name: "JavaScript",
      category: "Programming Language",
      proficiency: 0.70,
      logoPath: "./techIcons/JavaScript.png",
      description: "Core programming language for web development",
    },
    {
      name: "TypeScript",
      category: "Programming Language",
      proficiency: 0.75,
      logoPath: "./techIcons/TypeScript.png",
      description: "Typed superset of JavaScript for better development",
    },
    {
      name: "HTML5",
      category: "Frontend & Styling",
      proficiency: 0.85,
      logoPath: "./techIcons/HTML5.png",
      description: "Modern markup language for creating web pages",
    },
    {
      name: "CSS3",
      category: "Frontend & Styling",
      proficiency: 0.80,
      logoPath: "./techIcons/CSS3.png",
      description: "Advanced styling language for web interfaces",
    },

    // Backend & APIs  
    {
      name: "Node.js",
      category: "Backend & APIs",
      proficiency: 0.80,
      logoPath: "./techIcons/Node.js.png",
      description: "Server-side JavaScript runtime environment",
    },
    {
      name: "Python",
      category: "Backend & APIs",
      proficiency: 0.80,
      logoPath: "./techIcons/Python.png",
      description: "Versatile programming language for backend development",
    },
    {
      name: "PHP",
      category: "Backend & APIs",
      proficiency: 0.75,
      logoPath: "./techIcons/PHP.png",
      description: "Server-side scripting language for web development",
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
      name: "MySQL",
      category: "Database & State Management",
      proficiency: 0.65,
      logoPath: "./techIcons/MySQL.png",
      description: "Popular relational database management system",
    },
    {
      name: "Firebase",
      category: "Backend & APIs",
      proficiency: 0.90,
      logoPath: "./techIcons/Firebase.png",
      description: "Backend-as-a-Service platform for mobile and web apps",
    },

    // Design & Prototyping
    {
      name: "Figma",
      category: "Design & Prototyping",
      proficiency: 0.70,
      logoPath: "./techIcons/Figma.png",
      description: "Collaborative design and prototyping tool",
    },

    // WordPress & CMS
    {
      name: "WordPress",
      category: "WordPress & CMS",
      proficiency: 0.85,
      logoPath: "./techIcons/WordPress.svg",
      description: "WordPress CMS development and customization",
    },
    {
      name: "Custom Themes",
      category: "WordPress & CMS",
      proficiency: 0.85,
      logoPath: "./techIcons/WordPress.svg",
      description: "Custom WordPress theme development from scratch",
    },

    // Version Control & Collaboration
    {
      name: "Git",
      category: "Version Control & Collaboration",
      proficiency: 0.85,
      logoPath: "./techIcons/Git.png",
      description: "Distributed version control system",
    },
    {
      name: "GitHub",
      category: "Version Control & Collaboration",
      proficiency: 0.85,
      logoPath: "./techIcons/GitHub.png",
      description: "Version control and collaborative development platform",
    },
    {
      name: "Docker",
      category: "Deployment & Hosting",
      proficiency: 0.70,
      logoPath: "./techIcons/Docker.png",
      description: "Containerization platform for applications",
    },

    // Project Management
    {
      name: "Jira",
      category: "Version Control & Collaboration",
      proficiency: 0.65,
      logoPath: "./techIcons/Jira.png",
      description: "Project management and issue tracking tool",
    },
    {
      name: "Trello",
      category: "Version Control & Collaboration",
      proficiency: 0.65,
      logoPath: "./techIcons/Trello.png",
      description: "Kanban-style project management tool",
    },

    // Additional Cloud & Deployment (Optional - you can keep or remove)
    {
      name: "AWS",
      category: "Deployment & Hosting",
      proficiency: 0.75,
      logoPath: "./techIcons/AWS.png",
      description: "Amazon Web Services cloud platform",
    },
    {
      name: "Vercel",
      category: "Deployment & Hosting",
      proficiency: 0.75,
      logoPath: "./techIcons/Vercel.png",
      description: "Frontend deployment platform with serverless functions",
    }
  ]
};

export class SkillsRepository {
  // Simply return all skills data
  static getAllSkills() {
    return skillsData.skills.map(skill => SkillModel.fromJson(skill));
  }
}


// // src/data/repositories/skillsData.js

// import { SkillModel } from '../models/SkillModel.js';

// const skillsData = {
//   skills: [
//     // Mobile Development
//     {
//       name: "Flutter",
//       category: "Mobile Development",
//       proficiency: 0.95,
//       logoPath: "./techIcons/Flutter.png",
//       description: "Cross-platform mobile app development with beautiful UIs",
//     },
   
//     {
//       name: "React Native",
//       category: "Mobile Development",
//       proficiency: 0.75,
//       logoPath: "./techIcons/React.png",
//       description: "Cross-platform mobile development with JavaScript",
//     },
  
//     // web
//       {
//       name: "HTML",
//       category: "Frontend & Styling",
//       proficiency: 0.85,
//       logoPath: "./techIcons/HTML5.png",
//       description: "Markup language for creating web pages and applications",
//     },
//     {
//       name: "CSS",
//       category: "Frontend & Styling",
//       proficiency: 0.80,
//       logoPath: "./techIcons/CSS3.png",
//       description: "Styling language for designing web interfaces",
//     },

//        {
//       name: "JavaScript",
//       category: "Programming Language",
//       proficiency: 0.70,
//       logoPath: "./techIcons/JavaScript.png",
//       description: "Web Programming Language",
//     },
//      {
//       name: "Type Script",
//       category: "Language",
//       proficiency: 0.75,
//       logoPath: "./techIcons/TypeScript.png",
//       description: "Web Language",
//     },

//      {
//       name: "React js",
//       category: "Mobile Development",
//       proficiency: 0.90,
//       logoPath: "./techIcons/React.png",
//       description: "Primary programming language for Flutter development",
//     },
//       {
//       name: "Next.js",
//       category: "Language",
//       proficiency: 0.75,
//       logoPath: "./techIcons/Next.js.png",
//       description: "Web Language",
//     },
   
   

//     // Backend & APIs  
//      {
//       name: "Node.js",
//       category: "Backend & APIs",
//       proficiency: 0.80,
//       logoPath: "./techIcons/Node.js.png",
//       description: "Server-side JavaScript runtime environment",
//     },
//       {
//       name: "Python",
//       category: "Backend & APIs",
//       proficiency: 0.80,
//       logoPath: "./techIcons/Python.png",
//       description: "Server-side JavaScript runtime environment",
//     },


//         // Database & State Management
//     {
//       name: "MongoDB",
//       category: "Database & State Management",
//       proficiency: 0.70,
//       logoPath: "./techIcons/MongoDB.png",
//       description: "NoSQL document database for modern applications",
//     },
//     {
//       name: "Firebase",
//       category: "Backend & APIs",
//       proficiency: 0.90,
//       logoPath: "./techIcons/Firebase.png",
//       description: "Backend-as-a-Service platform for mobile apps",
//     },
//     {
//       name: "My SQL",
//       category: "Database & State Management",
//       proficiency: 0.65,
//       logoPath: "./techIcons/MySQL.png",
//       description: "State management library for JavaScript applications",
//     },

//      // Deployment & Hosting Trello.png
//     {
//       name: "AWS",
//       category: "Deployment & Hosting",
//       proficiency: 0.75,
//       logoPath: "./techIcons/Vercel.png",
//       description: "Frontend deployment platform with serverless functions",
//     },
//      // Deployment & Hosting Trello.png
//     {
//       name: "Vercel",
//       category: "Deployment & Hosting",
//       proficiency: 0.75,
//       logoPath: "./techIcons/AWS.png",
//       description: "Frontend deployment platform with serverless functions",
//     },
    
    
//        // Design & Prototyping
//     {
//       name: "Figma",
//       category: "Design & Prototyping",
//       proficiency: 0.70,
//       logoPath: "./techIcons/Figma.png",
//       description: "Collaborative design and prototyping tool",
//     },
  
  
    
 
    
//     // Version Control & Collaboration

//     {
//       name: "GitHub",
//       category: "Version Control & Collaboration",
//       proficiency: 0.85,
//       logoPath: "./techIcons/GitHub.png",
//       description: "Version control and collaborative development platform",
//     },
//     {
//       name: "Jira",
//       category: "Version Control & Collaboration",
//       proficiency: 0.65,
//       logoPath: "./techIcons/Jira.png",
//       description: "Project management and issue tracking tool",
//     },

//      {
//       name: "Trello",
//       category: "Version Control & Collaboration",
//       proficiency: 0.65,
//       logoPath: "./techIcons/Trello.png",
//       description: "Project management and issue tracking tool",
//     },
    


   
    
   
//   ]
// };

// export class SkillsRepository {
//   // Simply return all skills data
//   static getAllSkills() {
//     return skillsData.skills.map(skill => SkillModel.fromJson(skill));
//   }
// }