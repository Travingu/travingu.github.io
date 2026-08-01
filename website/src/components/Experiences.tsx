import ExperienceFormat from './ExperienceFormat';
import BoeingLogo from '../assets/boeing_Logo.webp';

export default function Experiences() {
  return (
    <ExperienceFormat
      experiences="EQA Component Testing Intern"
      details={[
        'Used technical forensics methods (x-ray, microscopy, mechanical/electrical testing, destructive physical analysis, chemical analysis) to identify root cause of failures.',
      ]}
      company="Boeing"
      date="July 2023 - September 2023"
      imageLocation={BoeingLogo}
      imageAlt="Boeing Logo"
    />
  );
}
