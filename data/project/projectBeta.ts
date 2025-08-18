import type { Project } from '@/types/Project';

export const projectBeta: Project = {
  id: 2,
  name: 'Project Beta',
  image: '/projects/beta.jpg',
  shortDescription: 'E-commerce with a personalized recommendation engine.',
  githubUrl: 'https://github.com/username/repo',
  liveUrl: 'https://username.github.io/repo/',
  languages: ['JavaScript', 'Python'],
  technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TensorFlow'],
  fullDescription: [
    {
      type: 'paragraph',
      content: 'A modern e-commerce application featuring a machine learning-based recommendation system that provides personalized product suggestions to users, increasing engagement and sales.'
    }
  ],
  size: 'medium',
};
