import { useState } from 'react';
import ProjectsFormat, { type ProjectsFormatProps } from './ProjectsFormat';

const projects: ProjectsFormatProps[] = [
  {
    title: 'HackSU 2026 - VibeCheck.ai',
    date: 'January 2026',
    summary:
      'Participated in a 24 hour Hackathon, building an app which analyzes what someone is wearing and gives suggestions based on what it detects. It focuses on color matching and overall outfit balance to help users improve their look instantly.',
    link: 'https://github.com/sluong05/vibecheck-web',
    typeOfLink: 'GitHub',
    skills: ['Python', 'JavaScript', 'MediaPipe', 'OpenCV'],
  },
  {
    title: 'Husky Micromouse',
    date: 'January 2026 - Present',
    summary:
      'Helped start up and lead a new engineering organization at the University of Washington. Together, we built a small autonomous robot that competes to find the fastest route through an unknown maze.',
    link: 'https://huskylink.washington.edu/organization/huskymicromouse',
    typeOfLink: 'Website',
    skills: ['Circuitry', 'C', 'Luau'],
  },
  {
    title: 'PyMiDio',
    date: 'March - Present',
    summary:
      'Created a Audio to Midi Transcriber and a MIDI player using a public ML model called Transkun. It is able to listen to piano playings (both live and recordings) and figure out the notes, velocities, pitch bend, and sustain levels with roughly 75% accuracy (increases up to 90% with a better quality microphone).',
    link: 'https://github.com/Travingu/PyMiDio',
    typeOfLink: 'GitHub',
    skills: ['Python', 'PyQt6'],
  },
];

const btnClass =
  'border-none bg-transparent px-2 text-3xl text-brand-primary disabled:cursor-default disabled:opacity-30 enabled:cursor-pointer enabled:hover:scale-110 enabled:hover:text-black';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="m-4">
      <div className="w-full overflow-hidden rounded-2xl">
        <ul
          className="m-0 flex list-none p-0 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <li key={project.title} className="box-border min-w-full">
              <ProjectsFormat {...project} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-2 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label="Previous Project"
          className={btnClass}
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
        >
          &#10094;
        </button>

        <button
          type="button"
          aria-label="Next Project"
          className={btnClass}
          disabled={currentIndex === projects.length - 1}
          onClick={() => setCurrentIndex((i) => Math.min(projects.length - 1, i + 1))}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
