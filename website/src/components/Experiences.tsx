import { useRef } from 'react';
import ExperienceFormat from './ExperienceFormat';
import { experiences } from '../data/experiences';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experiences() {
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(containerRef, { selector: '[data-reveal-item]', stagger: 0.12 });

  return (
    <div ref={containerRef}>
      {experiences.map((experience) => (
        <div key={experience.experiences} data-reveal-item className="flex gap-4">
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
