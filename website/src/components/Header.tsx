import { useState } from 'react';
import Social from './Social';
import NameLogo from '../assets/NameLogo.svg';

const linkClass =
  'rounded-[10px] bg-brand-primary px-4 py-2 text-brand-bg no-underline transition-colors duration-200 ease-in-out hover:text-brand-primary-light';

export interface HeaderProps {
  fullName: string;
}

export default function Header({ fullName }: HeaderProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex w-full items-start justify-between bg-brand-bg p-8">
      <a href="https://travingn.dev/">
        <img src={NameLogo} alt={fullName} className="h-8 w-auto" />
      </a>

      <div className="relative flex flex-col items-end">
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={expanded}
          className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border-none bg-brand-primary p-0"
          onClick={() => setExpanded((prev) => !prev)}
        >
          <span className="flex flex-col gap-[5px]">
            <span className="block h-[3px] w-[18px] rounded-full bg-brand-bg" />
            <span className="block h-[3px] w-[18px] rounded-full bg-brand-bg" />
            <span className="block h-[3px] w-[18px] rounded-full bg-brand-bg" />
          </span>
        </button>

        <div
          className={`absolute right-0 top-full z-10 flex flex-col items-end gap-2 overflow-hidden transition-all duration-300 ease-out ${
            expanded ? 'max-h-[500px] pt-4 opacity-100' : 'max-h-0 opacity-0'
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
        </div>
      </div>
    </div>
  );
}
