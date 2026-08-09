import { useRef } from 'react';
import CourseworkFormat from './CourseworkFormat';
import { courseworkYears } from '../data/coursework';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Coursework() {
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(containerRef, { selector: '[data-reveal-item]', stagger: 0.12 });

  return (
    <div ref={containerRef}>
      {courseworkYears.map((year) => (
        <div key={year.age} data-reveal-item className="flow-root">
          <CourseworkFormat {...year} />
        </div>
      ))}
    </div>
  );
}
