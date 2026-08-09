import type { ExperienceFormatProps } from '../components/ExperienceFormat';
import BoeingLogo from '../assets/boeing_Logo.webp';
import WashingtonLogo from '../assets/Washington_Huskies_logo.png';

export const experiences: ExperienceFormatProps[] = [
  {
    experiences: 'EQA Component Testing Intern',
    details: [
      'Used technical forensics methods (x-ray, microscopy, mechanical/electrical testing, destructive physical analysis, chemical analysis) to identify root cause of failures.',
    ],
    company: 'Boeing',
    date: 'July 2023 - September 2023',
    imageLocation: BoeingLogo,
    imageAlt: 'Boeing Logo',
  },
  {
    experiences: 'ITS-DS Systems Student Assistant',
    details: [
      'Student System Staff within Information Technology Services & Digital Strategies at the UW Libraries',
    ],
    company: 'UW Libraries',
    date: 'July 2026 - Present',
    imageLocation: WashingtonLogo,
    imageAlt: 'UW Logo',
  },
];
