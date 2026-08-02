import { useState } from 'react';
import ProjectsFormat, { type ProjectCategory, type ProjectsFormatProps } from './ProjectsFormat';

const projects: ProjectsFormatProps[] = [
  {
    title: 'HackSU 2026 - VibeCheck.ai',
    date: 'January 2026',
    summary:
      'Participated in a 24 hour Hackathon, building an app which analyzes what someone is wearing and gives suggestions based on what it detects. It focuses on color matching and overall outfit balance to help users improve their look instantly.',
    link: 'https://github.com/sluong05/vibecheck-web',
    typeOfLink: 'GitHub',
    skills: ['Python', 'JavaScript', 'MediaPipe', 'OpenCV'],
    category: 'software',
  },
  {
    title: 'Husky Micromouse',
    date: 'January 2026 - Present',
    summary:
      'Helped start up and lead a new engineering organization at the University of Washington. Together, we built a small autonomous robot that competes to find the fastest route through an unknown maze.',
    link: 'https://huskylink.washington.edu/organization/huskymicromouse',
    typeOfLink: 'Website',
    skills: ['Circuitry', 'C', 'Luau'],
    category: 'hardware',
  },
  {
    title: 'PyMiDio',
    date: 'March - Present',
    summary:
      'Created a Audio to Midi Transcriber and a MIDI player using a public ML model called Transkun. It is able to listen to piano playings (both live and recordings) and figure out the notes, velocities, pitch bend, and sustain levels with roughly 75% accuracy (increases up to 90% with a better quality microphone).',
    link: 'https://github.com/Travingu/PyMiDio',
    typeOfLink: 'GitHub',
    skills: ['Python', 'PyQt6'],
    category: 'software',
  },
];

const filters: { label: string; value: ProjectCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Software', value: 'software' },
  { label: 'Hardware', value: 'hardware' },
];

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');

  const filteredProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter,
  );

  return (
    <div className="m-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={`cursor-pointer rounded-[20px] border border-brand-primary px-4 py-1 transition-colors duration-200 ease-in-out ${
              filter === value
                ? 'bg-brand-primary text-brand-bg'
                : 'bg-transparent text-brand-primary hover:bg-brand-project'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {filteredProjects.map((project) => (
          <ProjectsFormat key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
