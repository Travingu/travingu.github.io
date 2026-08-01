import { useState } from 'react';
import Social from './Social';

const linkClass =
  'rounded-[10px] bg-brand-primary px-4 py-2 text-brand-bg no-underline transition-colors duration-200 ease-in-out hover:text-brand-primary-light';

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="sticky top-0 z-[100] flex flex-wrap items-center justify-center bg-brand-bg p-8 [@media(max-width:636px)]:items-start">
      <div
        className="hidden cursor-pointer p-[10px] [@media(max-width:636px)]:block"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <span className="my-[5px] block h-[3px] w-[25px] bg-brand-primary" />
        <span className="my-[5px] block h-[3px] w-[25px] bg-brand-primary" />
        <span className="my-[5px] block h-[3px] w-[25px] bg-brand-primary" />
      </div>

      <div
        className={`relative -top-1 flex flex-wrap items-center justify-center gap-4 [@media(max-width:636px)]:w-full [@media(max-width:636px)]:flex-col [@media(max-width:636px)]:gap-2 [@media(max-width:636px)]:overflow-hidden [@media(max-width:636px)]:transition-all [@media(max-width:636px)]:duration-300 [@media(max-width:636px)]:ease-out ${
          expanded
            ? '[@media(max-width:636px)]:max-h-[500px] [@media(max-width:636px)]:pt-4 [@media(max-width:636px)]:opacity-100'
            : '[@media(max-width:636px)]:max-h-0 [@media(max-width:636px)]:opacity-0'
        }`}
      >
        <a href="#title" className={linkClass} onClick={() => setExpanded(false)}>
          About
        </a>
        <a href="#skills" className={linkClass} onClick={() => setExpanded(false)}>
          Skills
        </a>
        <a href="#experience" className={linkClass} onClick={() => setExpanded(false)}>
          Experience
        </a>
        <a href="#projects" className={linkClass} onClick={() => setExpanded(false)}>
          Projects
        </a>
        <a href="#education" className={linkClass} onClick={() => setExpanded(false)}>
          Education
        </a>
        <Social platform="github" username="Travingu" />
      </div>
    </div>
  );
}
