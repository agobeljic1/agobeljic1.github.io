import { MarqueeItem } from '../interfaces/marquee-item';

export type Certification = {
  dateRange: string;
  title: string;
  issuer: string;
};

export const skills = [
  // {
  //   src: 'html.svg',
  //   alt: 'HTML 5',
  // },
  // {
  //   src: 'css.svg',
  //   alt: 'CSS 3',
  // },

  { src: 'python.png', alt: 'Python' },
  { src: 'fastapi.svg', alt: 'FastAPI', invert: true },
  { src: 'aws.png', alt: 'AWS' },
  {
    src: 'angular.svg',
    alt: 'Angular',
  },
  {
    src: 'react.svg',
    alt: 'React',
  },
  {
    src: 'nodejs.svg',
    alt: 'Node.js',
  },
  {
    src: 'nestjs.webp',
    alt: 'NestJS',
  },
  {
    src: 'typescript.png',
    alt: 'Typescript',
  },
  {
    src: 'mysql.svg',
    alt: 'MySQL',
  },
  {
    src: 'mongodb.svg',
    alt: 'MongoDB',
  },
  // {
  //   src: 'sass.svg',
  //   alt: 'SASS',
  // },
  // {
  //   src: 'js.svg',
  //   alt: 'JavaScript',
  // },

  // {
  //   src: 'redux.svg',
  //   alt: 'Redux',
  // },
  // {
  //   src: 'java.svg',
  //   alt: 'Java',
  // },

  // {
  //   src: 'ngrx.svg',
  //   alt: 'Ngrx',
  // },

  // {
  //   src: 'spring-boot.svg',
  //   alt: 'Spring Boot',
  // },
];

export const clients: MarqueeItem[] = [
  {
    src: 'bmw.svg',
    alt: 'BMW',
    href: 'https://www.bmw.com',
  },
  {
    src: 'usa.png',
    alt: 'USA Government',
    href: 'https://wa.gov/',
  },
  {
    src: 'ericsson.svg',
    alt: 'Ericsson',
    href: 'https://www.ericsson.com',
  },
  {
    src: 'rag.svg',
    alt: 'RAG',
    href: 'https://www.rag.de',
  },
  {
    src: 'gravitee.svg',
    alt: 'Gravitee',
    href: 'https://www.gravitee.io',
  },
  {
    src: 'yum.svg',
    alt: 'Yum!',
    href: 'https://www.yum.com',
  },
  {
    src: 'solargis.svg',
    alt: 'Solargis',
    href: 'https://www.solargis.com',
  },
  {
    src: 'toptal.svg',
    alt: 'Toptal',
    href: 'https://www.toptal.com',
  },
  {
    src: 'insightful.svg',
    alt: 'Insightful',
    href: 'https://www.insightful.io',
  },
];

export const certifications: Certification[] = [
  {
    dateRange: 'September 2025 - September 2028',
    title: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
  },
  {
    dateRange: 'March 2025 - Present',
    title: 'eCommerce SEO and AI Specialist',
    issuer: 'Seolaxy',
  },
];
