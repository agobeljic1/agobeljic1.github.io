export type ProjectDetails = {
  description?: string;
  role?: string;
  stack?: string[];
  highlights?: string[];
};

export type Project = {
  name: string;
  src: string;
  link?: string;
  details?: ProjectDetails;
};

export const projects: Project[] = [
  {
    name: 'Suzy',
    src: 'assets/projects/suzy.jpg',
    link: 'https://www.suzy.com/',
    details: {
      description:
        'Consumer insights platform focused on fast survey research and analytics.',
      role: 'Frontend Engineer',
      stack: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
      highlights: [
        'Built and maintained production UI features.',
        'Worked on performance and UX improvements across core flows.',
      ],
    },
  },
  {
    name: 'Witness AI',
    src: 'assets/projects/witness-ai.webp',
    link: 'https://witness.ai/',
    details: {
      description:
        'AI security platform for visibility and governance across AI usage.',
      role: 'Frontend Engineer',
      stack: ['React', 'Remix', 'TypeScript', 'CSS', 'Python', 'FastAPI', 'Docker'],
      highlights: [
        'Implemented UI surfaces for product workflows.',
        'Improved usability and consistency of shared components.',
      ],
    },
  },
  {
    name: 'Washington Government',
    src: 'assets/projects/washington-government.webp',
    link: 'https://irataxcredits.wa.gov/',
    details: {
      description: 'Government portal for program information and applications.',
      role: 'Frontend Engineer',
      stack: ['Angular', 'TypeScript', 'SCSS', 'Python', 'FastAPI', 'Docker', 'Weaviate'],
      highlights: [
        'Shipped accessible, responsive UI improvements.',
        'Worked on reliability and maintainability of the frontend.',
      ],
    },
  },
  {
    name: 'Wfhomie',
    src: 'assets/projects/wfhomie.png',
    link: 'https://www.goco.io/',
    details: {
      description: 'Business operations platform and customer-facing flows.',
      role: 'Frontend Engineer',
      stack: ['React', 'TypeScript', 'RxJS', 'Spring Boot', 'Node.js', 'Google Cloud Platform', 'Kubernetes', 'Kafka'],
      highlights: [
        'Implemented features across multiple UI modules.',
        'Collaborated closely with product and design on UX.',
      ],
    },
  },
  {
    name: 'Solargis',
    src: 'assets/projects/solargis.jpeg',
    link: 'https://apps.solargis.com/',
    details: {
      description:
        'Solar resource and PV performance analytics for energy planning.',
      role: 'Frontend Engineer',
      stack: ['Angular', 'TypeScript', 'SCSS', 'Spring Boot', 'Node.js', 'AWS', 'Python', 'Lambda', 'DynamoDB'],
      highlights: [
        'Delivered UI enhancements for data-heavy screens.',
        'Focused on clarity and usability for complex datasets.',
      ],
    },
  },
  {
    name: 'Bloola',
    src: 'assets/projects/bloola.png',
    link: 'https://www.bloola.com/',
    details: {
      description: 'Customer platform for workflows and information management.',
      role: 'Frontend Engineer',
      stack: ['Angular', 'TypeScript', 'SCSS', 'RxJS', 'Spring Boot'],
      highlights: [
        'Built UI features and refined existing screens.',
        'Improved consistency across components and styling.',
      ],
    },
  },
  {
    name: 'Insightful',
    src: 'assets/projects/insightful.png',
    link: 'https://app.insightful.io/',
    details: {
      description:
        'Workforce analytics and productivity platform for teams and managers.',
      role: 'Frontend Engineer',
      stack: ['Angular', 'TypeScript', 'RxJS', 'Google Cloud Platform', 'Node.js', 'Microservices', 'Redis'],
      highlights: [
        'Implemented and polished complex UI flows.',
        'Improved responsiveness and UI performance.',
      ],
    },
  },
  {
    name: 'Gravitee',
    src: 'assets/projects/gravitee.jpeg',
    link: 'https://www.gravitee.io/',
    details: {
      description:
        'API management platform covering gateways, policies, and developer portals.',
      role: 'Frontend Engineer',
      stack: ['Angular', 'TypeScript', 'RxJS', 'AWS', 'Microservices', 'Kafka', 'Redis'],
      highlights: [
        'Delivered UI work for platform modules and administration screens.',
        'Worked on maintainability and shared UI patterns.',
      ],
    },
  },
  {
    name: 'Arti Analytics DSML',
    src: 'assets/projects/arti-analytics-dsml.jpeg',
    link: 'https://artianalytics.com/',
    details: {
      description:
        'Analytics and data science / machine learning platform for teams.',
      role: 'Frontend Engineer',
      stack: ['Angular', 'TypeScript', 'SCSS', 'Python', 'FastAPI', 'Docker', 'MySQL'],
      highlights: [
        'Built UI functionality for product workflows.',
        'Improved overall UX and component consistency.',
      ],
    },
  },
];