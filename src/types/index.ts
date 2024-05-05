export interface NavItem {
  key: string;
  label: string;
  url: string;
}

export interface TestimonialItem {
  photo: string;
  name: string;
  role: string;
  testimonial: string;
}

export interface Experience {
  title: string;
  date: string;
  description: string;
}

export interface Education {
  institution: string;
  date: string;
  description: string;
}

export interface PortfolioItem {
  description: string;
  categoryId: string;
  link: string;
  title: string;
  imageId: string;
}

export interface PortfolioCategory {
  categoryId: string;
  category: string;
}
