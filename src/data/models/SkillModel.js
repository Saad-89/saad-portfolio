// src/data/models/SkillModel.js

export class SkillModel {
  constructor({
    name,
    category,
    proficiency,
    logoPath,
    description
  }) {
    this.name = name;
    this.category = category;
    this.proficiency = proficiency; // 0.0 to 1.0
    this.logoPath = logoPath;
    this.description = description;
  }

  // Helper method to get proficiency percentage
  get proficiencyPercentage() {
    return `${Math.round(this.proficiency * 100)}%`;
  }

  // Helper method to get proficiency level
  get proficiencyLevel() {
    if (this.proficiency >= 0.9) return 'Expert';
    if (this.proficiency >= 0.8) return 'Advanced';
    if (this.proficiency >= 0.7) return 'Intermediate';
    if (this.proficiency >= 0.6) return 'Beginner';
    return 'Learning';
  }

  // Static method to create from JSON
  static fromJson(json) {
    return new SkillModel({
      name: json.name,
      category: json.category,
      proficiency: json.proficiency,
      logoPath: json.logoPath,
      description: json.description
    });
  }

  // Convert to JSON
  toJson() {
    return {
      name: this.name,
      category: this.category,
      proficiency: this.proficiency,
      logoPath: this.logoPath,
      description: this.description
    };
  }
}