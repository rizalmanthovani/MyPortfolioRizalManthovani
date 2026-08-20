export type Contact = {
  type: 'email' | 'linkedin' | 'github' | 'resume';
  label: string;
  href: string;
  icon?: string;
};

export const contacts: Contact[] = [
  {
    type: 'email',
    label: 'Email',
    href: 'manthovanir24@gmail.com',
  },
  {
    type: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/rizalmanthovani',
  },
  {
    type: 'github',
    label: 'GitHub',
    href: 'https://github.com/rizalmanthovani',
  },
  {
    type: 'resume',
    label: 'Resume',
    href: '/resume.pdf',
  },
];
