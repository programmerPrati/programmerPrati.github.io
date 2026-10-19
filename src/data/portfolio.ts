export type Link = {
  label: string
  href: string
}

export type ResearchArea = {
  index: string
  title: string
  description: string
}

export type Publication = {
  title: string
  authors: string
  venue: string
  year: string
  summary?: string
  links: Link[]
}

export type Project = {
  title: string
  description: string
  tags: string[]
  links: Link[]
}

export type TimelineItem = {
  period: string
  role: string
  organization: string
  description?: string
}

export const portfolio = {
  profile: {
    name: 'Pratibodh Solanki',
    initials: 'PS',
    role: 'AI / ML Research & Engineering',
    introduction:
      'Exploring how intelligent systems can be made more capable, reliable, and useful.',
    affiliation: '',
    location: '',
    email: 'pratibodhs@gmail.com',
  },
  about: [
    'I am an AI/ML researcher and engineer interested in the ideas and systems that make modern machine learning work. My focus spans rigorous experimentation, thoughtful evaluation, and the engineering needed to turn research into dependable tools.',
    'This portfolio is a living record of my research, technical work, and academic direction. Detailed publications, projects, and experience will be added as the portfolio develops.',
  ],
  researchAreas: [
    {
      index: '01',
      title: 'Learning & Reasoning',
      description:
        'Understanding how learning systems form representations, generalize, and reason across complex tasks.',
    },
    {
      index: '02',
      title: 'Reliable AI',
      description:
        'Studying evaluation, robustness, uncertainty, and the conditions under which model behavior can be trusted.',
    },
    {
      index: '03',
      title: 'AI Systems',
      description:
        'Building efficient, reproducible systems that connect research prototypes with real-world use.',
    },
  ] satisfies ResearchArea[],

  // Add real entries below; empty sections remain hidden from the public site.
  publications: [] as Publication[],
  projects: [] as Project[],
  experience: [] as TimelineItem[],
  education: [] as TimelineItem[],
  skills: [] as { group: string; items: string[] }[],

  links: {
    github: 'https://github.com/programmerPrati',
    linkedin: '',
    scholar: '',
    cv: '',
    resume: '',
  },
}
