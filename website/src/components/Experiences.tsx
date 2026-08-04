import ExperienceFormat, { type ExperienceFormatProps } from './ExperienceFormat';
import BoeingLogo from '../assets/boeing_Logo.webp';
import WashingtonLogo from '../assets/Washington_Huskies_logo.png';

const experiences: ExperienceFormatProps[] = [
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

export default function Experiences() {
  return (
    <div>
      {experiences.map((experience) => (
        <div key={experience.experiences} className="flex gap-4">
          <div className="flex flex-col items-center gap-2">
            <span className="h-4 w-4 shrink-0 rounded-full border-2 border-brand-primary bg-brand-bg" />
            <span className="mb-2 w-[3px] flex-1 bg-brand-primary" />
          </div>
          <ExperienceFormat {...experience} />
        </div>
      ))}
    </div>
  );
}
