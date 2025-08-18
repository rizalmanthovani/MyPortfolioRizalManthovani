import type { Project } from '@/types/Project';

import { webAppInteraktif } from './webAppInteraktif';
import { projectBeta } from './projectBeta';
// Impor proyek-proyek lain di sini saat Anda menambahkannya
// import { namaProjectLain } from './namaProjectLain';

export const projectData: Project[] = [
  webAppInteraktif,
  projectBeta,
  // namaProjectLain,
];

