import { experiences } from '../data/experiences';
import { projects } from '../data/projects';
import { courseworkYears } from '../data/coursework';
import ProfileImage from '../assets/Profile.jpg';
import WashingtonLogo from '../assets/Washington_Huskies_logo.png';

export type MiniResumeSectionId = 'title' | 'experience' | 'projects' | 'education' | 'coursework';

export interface MiniResumeProps {
  activeSection: string;
  fullName: string;
  major: string;
  school: string;
  gpa: string;
}

interface MiniResumeRow {
  id: MiniResumeSectionId;
  label: string;
  meta: string;
  image?: string;
  imageAlt?: string;
}

const latestExperience = experiences[experiences.length - 1];
const currentYear = courseworkYears[0];

function scrollToSection(id: MiniResumeSectionId) {
  // Mandatory scroll-snap (global.css) fights a long-distance smooth scrollIntoView
  // and stalls it partway there, so jump straight there instead — the snap itself
  // still gives the landing its motion via the browser's own snap-settle behavior.
  document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' });
}

export default function MiniResume({ activeSection, fullName, major, school, gpa }: MiniResumeProps) {
  const rows: MiniResumeRow[] = [
    {
      id: 'experience',
      label: 'Experience',
      meta: `${experiences.length} roles · ${latestExperience.company}`,
      image: latestExperience.imageLocation,
      imageAlt: latestExperience.imageAlt,
    },
    {
      id: 'projects',
      label: 'Projects',
      meta: `${projects.length} projects · Software & Hardware`,
    },
    {
      id: 'education',
      label: 'Education',
      meta: `${major} · GPA ${gpa}`,
      image: WashingtonLogo,
      imageAlt: 'University of Washington logo',
    },
    {
      id: 'coursework',
      label: 'Coursework',
      meta: `${currentYear.age} Year · ${currentYear.year}`,
    },
  ];

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-brand-card p-6">
      <button
        type="button"
        onClick={() => scrollToSection('title')}
        aria-current={activeSection === 'title' ? 'true' : undefined}
        className={`flex w-full cursor-pointer items-center gap-3 rounded-xl border-none p-2 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary ${
          activeSection === 'title' ? 'bg-brand-primary-light/40' : 'bg-transparent hover:bg-brand-primary-light/20'
        }`}
      >
        <img
          src={ProfileImage}
          alt={`${fullName} portrait`}
          className="h-12 w-12 shrink-0 rounded-full border border-brand-dark object-cover"
          width={48}
          height={48}
        />
        <div className="min-w-0">
          <p className="m-0 truncate font-bold text-brand-dark">{fullName}</p>
          <p className="m-0 truncate text-sm text-brand-gray">{school}</p>
        </div>
      </button>

      <div className="flex flex-col gap-2">
        {rows.map((row) => {
          const isActive = activeSection === row.id;
          return (
            <button
              key={row.id}
              type="button"
              onClick={() => scrollToSection(row.id)}
              aria-current={isActive ? 'true' : undefined}
              className={`relative flex w-full cursor-pointer items-center gap-3 rounded-xl border-l-4 border-y-0 border-r-0 p-3 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary ${
                isActive
                  ? 'border-brand-primary bg-brand-primary-light/40'
                  : 'border-transparent bg-transparent hover:bg-brand-primary-light/20'
              }`}
            >
              {row.image && (
                <img
                  src={row.image}
                  alt={row.imageAlt}
                  className="h-8 w-8 shrink-0 rounded-md border border-brand-dark bg-brand-image-bg object-cover p-0.5"
                  width={32}
                  height={32}
                />
              )}
              <div className="min-w-0">
                <p className="m-0 font-bold text-brand-dark">{row.label}</p>
                <p className="m-0 truncate text-sm text-brand-gray">{row.meta}</p>
              </div>
              <span
                className={`absolute right-0 top-1/2 h-0.5 w-8 -translate-y-1/2 translate-x-full bg-brand-primary transition-opacity duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
