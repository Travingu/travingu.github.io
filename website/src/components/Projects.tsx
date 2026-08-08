import { useEffect, useRef, useState } from 'react';
import ProjectsFormat, { type ProjectCategory, type ProjectsFormatProps } from './ProjectsFormat';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects: ProjectsFormatProps[] = [
  {
    title: 'HackSU 2026 - VibeCheck.ai',
    date: 'January 2026',
    summary:
      'Participated in a 24 hour Hackathon, building an app which analyzes what someone is wearing and gives suggestions based on what it detects. It focuses on color matching and overall outfit balance to help users improve their look instantly.',
    link: 'https://github.com/sluong05/vibecheck-web',
    typeOfLink: 'GitHub',
    skills: ['Python', 'JavaScript', 'OpenCV'],
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
    date: 'March - May',
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

const PAGE_SIZE = 3;
const FADE_MS = 200;

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');
  const [page, setPage] = useState(0);
  const [visible, setVisible] = useState(true);
  const fadeTimeout = useRef<number | undefined>(undefined);
  const panelRef = useRef<HTMLDivElement>(null);
  useScrollReveal(panelRef);

  const filteredProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter,
  );

  const pageCount = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount - 1);

  useEffect(() => {
    setPage(0);
  }, [filter]);

  useEffect(() => {
    return () => window.clearTimeout(fadeTimeout.current);
  }, []);

  const goToPage = (next: number) => {
    if (next === safePage || next < 0 || next > pageCount - 1) return;
    setVisible(false);
    window.clearTimeout(fadeTimeout.current);
    fadeTimeout.current = window.setTimeout(() => {
      setPage(next);
      setVisible(true);
    }, FADE_MS);
  };

  const currentProjects = filteredProjects.slice(
    safePage * PAGE_SIZE,
    safePage * PAGE_SIZE + PAGE_SIZE,
  );

  return (
    <div ref={panelRef} className="lg:w-[110%] lg:-ml-[5%]">
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

        <div className="flex items-center gap-4">
          {pageCount > 1 && (
            <button
              type="button"
              onClick={() => goToPage(safePage - 1)}
              disabled={safePage === 0}
              aria-label="Previous projects"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-primary text-brand-primary transition-colors duration-200 ease-in-out hover:enabled:bg-brand-project disabled:cursor-not-allowed disabled:opacity-30"
            >
              &#8249;
            </button>
          )}

          <div
            className={`grid flex-1 grid-cols-1 gap-4 transition-opacity ease-in-out sm:grid-cols-3 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDuration: `${FADE_MS}ms` }}
          >
            {currentProjects.map((project) => (
              <ProjectsFormat key={project.title} {...project} />
            ))}
          </div>

          {pageCount > 1 && (
            <button
              type="button"
              onClick={() => goToPage(safePage + 1)}
              disabled={safePage === pageCount - 1}
              aria-label="Next projects"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-primary text-brand-primary transition-colors duration-200 ease-in-out hover:enabled:bg-brand-project disabled:cursor-not-allowed disabled:opacity-30"
            >
              &#8250;
            </button>
          )}
        </div>

        {pageCount > 1 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors duration-200 ease-in-out ${
                  i === safePage ? 'bg-brand-primary' : 'bg-brand-primary-light'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
