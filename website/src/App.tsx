import { useRef } from 'react';
import Header from './components/Header';
import Experiences from './components/Experiences';
import Coursework from './components/Coursework';
import Projects from './components/Projects';
import Reveal from './components/Reveal';
import MiniResume from './components/MiniResume';
import { useScrollSpy } from './hooks/useScrollSpy';
import WashingtonLogo from './assets/Washington_Huskies_logo.png';

// Name
const fullName = 'Travis Nguyen';

// Education
const major = 'Electrical and Computer Engineering';
const school = 'University of Washington';
const GPA = '3.42'; // Add this later
const honors = ["Dean's List"];
const awardString = honors.map((award) => ` ${award}`).join(); // Makes the string look good

const Separator = () => (
  <div className="mx-auto my-16 h-[30px] w-full border-b-[3px] border-brand-primary lg:hidden" />
);

// At lg+, each section fills the viewport and scroll-snaps into place so only one
// is ever fully at rest on screen; the inactive ones fade out instead of stacking.
const sectionClass = (isActive: boolean) =>
  `lg:flex lg:min-h-[calc(100vh-6rem)] lg:flex-col lg:justify-start lg:pt-16 lg:snap-start lg:scroll-mt-24 lg:transition-opacity lg:duration-500 ${
    isActive ? 'lg:opacity-100' : 'lg:pointer-events-none lg:opacity-0'
  }`;

export default function App() {
  const titleRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const courseworkRef = useRef<HTMLElement>(null);

  const activeSection = useScrollSpy([
    { id: 'title', ref: titleRef },
    { id: 'experience', ref: experienceRef },
    { id: 'projects', ref: projectsRef },
    { id: 'education', ref: educationRef },
    { id: 'coursework', ref: courseworkRef },
  ]);

  return (
    <>
      <Header fullName={fullName} />

      <main className="mx-auto w-full max-w-[1200px] p-4 leading-normal lg:grid lg:grid-cols-[300px_minmax(0,80ch)] lg:gap-x-12">
        <aside className="hidden lg:block">
          <div className="lg:sticky lg:top-24">
            <MiniResume activeSection={activeSection} fullName={fullName} major={major} school={school} gpa={GPA} />
          </div>
        </aside>

        <div className="mx-auto w-full max-w-[80ch] lg:mx-0">
          <section id="title" ref={titleRef} className={sectionClass(activeSection === 'title')}>
            <Reveal>
              <h1 className="my-4 text-4xl">{fullName}</h1>
              <p className="m-0 text-2xl text-brand-primary">{major}</p>
              <p className="text-2xl">
                An {major} student at {school}
              </p>
            </Reveal>
          </section>

          <Separator />

          <section
            id="experience"
            ref={experienceRef}
            className={sectionClass(activeSection === 'experience')}
          >
            <Reveal>
              <h2 className="my-4 text-4xl">Experience</h2>
              <p className="pb-4">Professional career, internship, or research experience.</p>
            </Reveal>
            <Experiences />
          </section>

          <Separator />

          <section
            id="projects"
            ref={projectsRef}
            className={sectionClass(activeSection === 'projects')}
          >
            <Reveal>
              <h2 className="my-4 text-4xl">Projects</h2>
              <p>Personal projects and activities that advanced my skillset.</p>
            </Reveal>
            <Projects />
          </section>

          <Separator />

          <section
            id="education"
            ref={educationRef}
            className={sectionClass(activeSection === 'education')}
          >
            <Reveal>
              <h2 className="my-4 text-4xl">Education</h2>
              <p>My College education and coursework</p>
            </Reveal>

            <Reveal as="div" className="m-4">
              <h3>{school} - Seattle</h3>
              <img src={WashingtonLogo} alt="University of Washington Logo" width={200} />
            </Reveal>

            <Reveal as="ol" className="m-4">
              <li>Major: {major}</li>
              <li>GPA: {GPA}</li>
              <li>Honors: {awardString}</li>
            </Reveal>
          </section>

          <Separator />

          <section
            id="coursework"
            ref={courseworkRef}
            className={sectionClass(activeSection === 'coursework')}
          >
            <Reveal>
              <h2 className="my-4 text-4xl">Coursework</h2>
            </Reveal>
            <Coursework />
          </section>
        </div>
      </main>
    </>
  );
}
