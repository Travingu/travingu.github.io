import { useRef } from 'react';
import CourseworkFormat from './CourseworkFormat';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Coursework() {
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(containerRef, { selector: '[data-reveal-item]', stagger: 0.12 });

  return (
    <div ref={containerRef}>
      <div data-reveal-item className="flow-root">
        <CourseworkFormat
          age="Sophomore"
          year="2025-2026"
          autumn={['ENGL 200', 'MATH 224', 'MUSIC 116', 'MUSIC 185', 'PHYS 122']}
          winter={['EE 201', 'EE 215', 'EE 241', 'EE 393', 'PSYCH 210']}
          spring={['EE 233', 'EE 271', 'EE 280']}
        />
      </div>
      <div data-reveal-item className="flow-root">
        <CourseworkFormat
          age="Freshman"
          year="2024-2025"
          autumn={['CSE 121', 'ENGL 131', 'ENGR 101', 'GEN ST 199', 'MATH 126']}
          winter={['CSE 122', 'MATH 207', 'OCEAN 102', 'PHYS 121']}
          spring={['ARCH 150', 'CHEM 142', 'CSE 123', 'MATH 208']}
        />
      </div>
    </div>
  );
}
