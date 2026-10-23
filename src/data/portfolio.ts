export type Link = {
  label: string
  href: string
}

export type FeaturedResearch = {
  title: string
  period: string
  description: string[]
  status?: string
  targetVenue?: string
  links: Link[]
}

export type TimelineItem = {
  period: string
  role: string
  organization: string
  team?: string
  location?: string
  description?: string[]
}

export const portfolio = {
  profile: {
    name: 'Pratibodh Solanki',
    initials: 'PS',
    role: "Master's Student in Computer Science",
    introduction:
      'Focused on machine learning and artificial intelligence, with a passion for research into capable, reliable, and useful intelligent systems.',
    affiliation: '',
    location: '',
    email: 'pratibodhs@gmail.com',
  },
  about: [
    "I am a Master's student in Computer Science focused on machine learning and artificial intelligence, with a passion for research. I am interested in the ideas and systems that make modern machine learning work, from rigorous experimentation to thoughtful evaluation.",
    'My work connects multi-agent learning, reinforcement learning, and agentic systems with the engineering needed to make research ideas dependable in practice.',
  ],
  // Add preprints, code, project pages, and other artifacts to each entry's links.
  // targetVenue is optional and only appears when a destination has been selected.
  featuredResearch: [
    {
      title: 'Co-Evolving Web Agents',
      period: 'March 2026 — Present',
      description: [
        'Architecting a co-evolving system in which one agent generates an environment and proposes a task for another agent to complete. The system includes a reinforcement-learning loop designed to train both agents through their evolving interaction.',
      ],
      status: 'Ongoing MS Research',
      links: [],
    },
    {
      title: 'MOSLIIL: LLM-Supervised Multi-Agent Collaborative Imitation Learning',
      period: 'January 2025 — May 2025',
      description: [
        'Developed a framework for training multi-agent systems with LLM supervision across centralized and decentralized architectures. Robotic agents query an LLM directly for demonstrations, then learn collaborative behavior through imitation.',
      ],
      status: 'First-author research paper in progress',
      links: [],
    },
    {
      title: 'Novel Info-Metrics and Cross-Entropy Losses for Deep Learning',
      period: 'May 2025 — November 2025',
      description: [
        'Proposed a family of custom information metrics and formulated novel cross-entropy-based loss functions for deep learning algorithms, providing tunable learning dynamics that complement standard cross-entropy objectives.',
      ],
      links: [],
    },
  ] as FeaturedResearch[],

  experience: [
    {
      period: 'June — August 2026',
      role: 'Agentic AI Intern',
      organization: 'Amazon',
      team: 'Prime Science',
      location: 'Seattle, Washington',
      description: [
        'Developed three multi-agent AI systems for Amazon Prime Science, encoding legacy operational knowledge into specialized agents that automate marketplace onboarding, benefit onboarding, and operational-pipeline diagnosis and resolution.',
        'Built the orchestration framework with specialized agents, tool execution, persistent state, resumable workflows, and structured inter-agent handoffs—reducing completion times from days to hours.',
      ],
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
