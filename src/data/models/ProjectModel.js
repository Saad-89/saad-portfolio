export class ProjectModel {
  constructor({
    id,
    title,
    shortDescription,
    detailedDescription,
    thumbnailUrl,
    videoUrl,
    technologies,
    category,
    completionDate
  }) {
    this.id = id;
    this.title = title;
    this.shortDescription = shortDescription;
    this.detailedDescription = detailedDescription;
    this.thumbnailUrl = thumbnailUrl;
    this.videoUrl = videoUrl;
    this.technologies = technologies;
    this.category = category;
    this.completionDate = completionDate;
  }

  static fromJson(json) {
    return new ProjectModel({
      id: json.id,
      title: json.title,
      shortDescription: json.shortDescription,
      detailedDescription: json.detailedDescription,
      thumbnailUrl: json.thumbnailUrl,
      videoUrl: json.videoUrl,
      technologies: [...json.technologies],
      category: json.category,
      completionDate: new Date(json.completionDate)
    });
  }

  toJson() {
    return {
      id: this.id,
      title: this.title,
      shortDescription: this.shortDescription,
      detailedDescription: this.detailedDescription,
      thumbnailUrl: this.thumbnailUrl,
      videoUrl: this.videoUrl,
      technologies: [...this.technologies],
      category: this.category,
      completionDate: this.completionDate.toISOString()
    };
  }
}