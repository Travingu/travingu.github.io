import Header from './components/Header';
import Experiences from './components/Experiences';
import Coursework from './components/Coursework';
import Projects from './components/Projects';
import Reveal from './components/Reveal';
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
  <div className="mx-auto my-16 h-[30px] w-full border-b-[3px] border-brand-primary" />
);

export default function App() {
  return (
    <>
      <Header fullName={fullName} />

      <main className="mx-auto w-full max-w-[80ch] p-4 leading-normal">
        <section id="title">
          <Reveal>
            <h1 className="my-4 text-4xl">{fullName}</h1>
            <p className="m-0 text-2xl text-brand-primary">{major}</p>
            <p className="text-2xl">
              An {major} student at {school}
            </p>
          </Reveal>
        </section>

        <Separator />

        <section id="experience">
          <Reveal>
            <h2 className="my-4 text-4xl">Experience</h2>
            <p className="pb-4">Professional career, internship, or research experience.</p>
          </Reveal>
          <Experiences />
        </section>

        <Separator />

        <section id="projects">
          <Reveal>
            <h2 className="my-4 text-4xl">Projects</h2>
            <p>Personal projects and activities that advanced my skillset.</p>
          </Reveal>
          <Projects />
        </section>

        <Separator />

        <section id="education">
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

          <Separator />
          <Reveal>
            <h2 className="my-4 text-4xl">Coursework</h2>
          </Reveal>
          <Coursework />
        </section>
      </main>
    </>
  );
}
