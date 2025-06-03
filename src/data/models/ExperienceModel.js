// src/data/models/ExperienceModel.js

export class ExperienceModel {
  constructor({
    id,
    company,
    position,
    duration,
    location,
    type,
    description,
    responsibilities,
    technologies,
    companyLogo = null,
    companyWebsite = null,
    isCurrentJob = false,
  }) {
    this.id = id;
    this.company = company;
    this.position = position;
    this.duration = duration;
    this.location = location;
    this.type = type; // "Full-time", "Part-time", "Freelance", "Contract"
    this.description = description;
    this.responsibilities = responsibilities;
    this.technologies = technologies;
    this.companyLogo = companyLogo;
    this.companyWebsite = companyWebsite;
    this.isCurrentJob = isCurrentJob;
  }

  static fromJson(json) {
    return new ExperienceModel({
      id: json.id,
      company: json.company,
      position: json.position,
      duration: json.duration,
      location: json.location,
      type: json.type,
      description: json.description,
      responsibilities: [...json.responsibilities],
      technologies: [...json.technologies],
      companyLogo: json.companyLogo,
      companyWebsite: json.companyWebsite,
      isCurrentJob: json.isCurrentJob ?? false,
    });
  }

  toJson() {
    return {
      id: this.id,
      company: this.company,
      position: this.position,
      duration: this.duration,
      location: this.location,
      type: this.type,
      description: this.description,
      responsibilities: [...this.responsibilities],
      technologies: [...this.technologies],
      companyLogo: this.companyLogo,
      companyWebsite: this.companyWebsite,
      isCurrentJob: this.isCurrentJob,
    };
  }
}