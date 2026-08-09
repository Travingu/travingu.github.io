import type { ProjectsFormatProps } from '../components/ProjectsFormat';

export const projects: ProjectsFormatProps[] = [
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
  {
    title: 'Personal Website',
    date: 'October 2025 - Present',
    summary:
      'Built a website with Games, Blog, Portfolio, and other Projects as an alternative to a traditionall Resume',
    link: 'https://travingn.dev',
    typeOfLink: 'Website',
    skills: ['React', 'TailwindCSS', 'AWS Amplify', 'AWS Route 53'],
    category: 'software',
  },
];
