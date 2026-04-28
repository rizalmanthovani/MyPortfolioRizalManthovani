export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  problem: string;
  techStack: string[];
  impact: string;
  demoUrl: string;
  repoUrl: string;
  image: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level?: number; // 0-100
  icon?: string;
}

export interface Contact {
  type: 'email' | 'linkedin' | 'github' | 'resume';
  label: string;
  href: string;
  icon: string;
}
