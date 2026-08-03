import { useEffect, useRef, useState } from 'react';

export type ProjectCategory = 'software' | 'hardware';

export interface ProjectsFormatProps {
  title: string;
  date: string;
  summary: string;
  link: string;
  typeOfLink: string;
  skills: string[];
  category: ProjectCategory;
}

export default function ProjectsFormat({
  title,
  date,
  summary,
  link,
  typeOfLink,
  skills,
}: ProjectsFormatProps) {
  const [expanded, setExpanded] = useState(false);
  const [overflowing, setOverflowing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expanded) return;
    const el = containerRef.current;
    if (!el) return;

    const checkOverflow = () => setOverflowing(el.scrollHeight > el.clientHeight + 1);
    checkOverflow();

    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [summary, expanded]);

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-brand-project p-4">
      <h2 className="m-0">{title}</h2>
      <p className="m-0 text-brand-gray">{date}</p>
      <div ref={containerRef} className={`relative ${expanded ? '' : 'h-24 overflow-hidden'}`}>
        <p className="text-base text-brand-gray">{summary}</p>
        {!expanded && overflowing && (
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-brand-project to-transparent" />
        )}
      </div>
      {overflowing && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="w-fit cursor-pointer text-sm font-bold text-brand-primary underline decoration-1 underline-offset-2"
        >
          {expanded ? 'Read less' : 'Read more'}
        </button>
      )}
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
        <a
          href={link}
          className="rounded-[20px] bg-brand-primary p-[0.4rem] text-brand-bg no-underline transition-[font-size] duration-200 ease-in-out hover:text-[1.1rem]"
        >
          {typeOfLink}
        </a>
        {skills.map((skill) => (
          <p
            key={skill}
            className="m-0 inline-flex w-fit rounded-[20px] border border-brand-primary p-[0.4rem] text-brand-primary transition-[font-size] duration-200 ease-in-out hover:text-[1.1rem]"
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
}
