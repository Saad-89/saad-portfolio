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
    completionDate,
    // Case-study fields (optional)
    tagline,
    challenge,
    approach,
    contributions,
    role,
    liveUrl,
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
    // Case-study narrative
    this.tagline = tagline || shortDescription || '';
    this.challenge = challenge || '';
    this.approach = approach || '';
    this.contributions = contributions || [];
    this.role = role || '';
    this.liveUrl = liveUrl || '';
    this.slug = (title || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  get year() {
    return this.completionDate instanceof Date && !isNaN(this.completionDate)
      ? this.completionDate.getFullYear()
      : null;
  }

  get hasCaseStudy() {
    return Boolean(this.challenge || this.approach || (this.contributions && this.contributions.length));
  }

  static fromJson(json) {
    return new ProjectModel({
      id: json.id,
      title: json.title,
      shortDescription: json.shortDescription,
      detailedDescription: json.detailedDescription,
      thumbnailUrl: json.thumbnailUrl,
      videoUrl: json.videoUrl,
      technologies: [...(json.technologies || [])],
      category: json.category,
      completionDate: new Date(json.completionDate),
      tagline: json.tagline,
      challenge: json.challenge,
      approach: json.approach,
      contributions: json.contributions ? [...json.contributions] : [],
      role: json.role,
      liveUrl: json.liveUrl,
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
      completionDate: this.completionDate.toISOString(),
      tagline: this.tagline,
      challenge: this.challenge,
      approach: this.approach,
      contributions: [...this.contributions],
      role: this.role,
      liveUrl: this.liveUrl,
    };
  }
}
