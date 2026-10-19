export type Link = {
  label: string
  href: string
}

export type ResearchProject = {
  title: string
  period: string
  description: string[]
  status?: string
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
    'My work connects multi-agent learning, reinforcement learning, and agentic systems with the engineering needed to make research ideas dependable in practice.',
  ],
  researchProjects: [
    {
      title: 'Co-Evolving Web Agents',
      period: 'March 2026 — Present',
      description: [
        'Architecting a co-evolving system in which one agent generates an environment and proposes a task for another agent to complete. The system includes a reinforcement-learning loop designed to train both agents through their evolving interaction.',
      ],
      status: 'Ongoing MS Research',
    },
    {
      title: 'MOSLIIL: LLM-Supervised Multi-Agent Collaborative Imitation Learning',
      period: 'January 2025 — May 2025',
      description: [
        'Developed a framework for training multi-agent systems with LLM supervision across centralized and decentralized architectures. Robotic agents query an LLM directly for demonstrations, then learn collaborative behavior through imitation.',
      ],
      status: 'First-author research paper in progress',
    },
    {
      title: 'Novel Info-Metrics and Cross-Entropy Losses for Deep Learning',
      period: 'May 2025 — November 2025',
      description: [
        'Proposed a family of custom information metrics and formulated novel cross-entropy-based loss functions for deep learning algorithms, providing tunable learning dynamics that complement standard cross-entropy objectives.',
      ],
    },
  ] satisfies ResearchProject[],

  // Add real entries below; empty sections remain hidden from the public site.
  publications: [] as Publication[],
  projects: [] as Project[],
  experience: [
    {
      period: 'Internship',
      role: 'Agentic AI Intern',
      organization: 'Amazon · Prime Science',
      description:
        'Developed three agentic AI systems for Amazon Prime Science, automating marketplace onboarding, benefit onboarding, and the diagnosis and resolution of operational pipeline failures. Architected a multi-agent orchestration framework with specialized agents, tool execution, persistent state, resumable workflows, and structured inter-agent handoffs.',
    },
  ] satisfies TimelineItem[],
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
