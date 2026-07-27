/**
 * Shared, strict TypeScript types for site content.
 * Kept dependency-free so both server and client components can import them.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
  tagline: string;
  theme: ArtworkTheme;
}

export interface ProcessDetailStep {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
  theme: ArtworkTheme;
}

export type ArtworkTheme = "sunset" | "violet" | "ember" | "mint" | "slate" | "gold" | "lavender";

export type WorkCategory =
  | "Beauty & Wellness"
  | "Food & Beverage"
  | "Hospitality"
  | "Lifestyle & Apparel";

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: WorkCategory;
  theme: ArtworkTheme;
}

export interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  icon: "feather" | "map-pin" | "award";
}

export interface Testimonial {
  id: string;
  reaction: string;
  quote: string;
  name: string;
  role: string;
  theme: ArtworkTheme;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  theme: ArtworkTheme;
}

export interface PrincipleItem {
  id: string;
  letter: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  theme: ArtworkTheme;
  bio?: string;
  isFounder?: boolean;
}

export interface ValueWord {
  id: string;
  word: string;
}

export interface DoDontItem {
  id: string;
  title: string;
  description: string;
}

export interface RecognitionItem {
  id: string;
  title: string;
  description: string;
  theme: ArtworkTheme;
  background: "ink" | "lavender";
  imagePosition: "left" | "right";
}

export interface ContactFormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  interests: string[];
}

export type ContactFormErrors = Partial<
  Record<Exclude<keyof ContactFormState, "interests">, string>
>;
