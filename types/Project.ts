export type ContentBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'heading'; level: 3 | 4; content: string };

export interface Project {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  githubUrl?: string; // Opsional: Link ke GitHub
  liveUrl?: string;   // Opsional: Link ke demo live
  languages: string[];
  technologies: string[];
  fullDescription: ContentBlock[];
  size: 'small' | 'medium' | 'large';

}