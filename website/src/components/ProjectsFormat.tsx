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
  return (
    <div className="w-full rounded-2xl bg-brand-project p-4">
      <h2 className="m-0">{title}</h2>
      <p className="m-0 text-brand-gray">{date}</p>
      <p className="text-base text-brand-gray">{summary}</p>
      <a
        href={link}
        className="rounded-[20px] bg-brand-primary p-[0.4rem] text-brand-bg no-underline transition-[font-size] duration-200 ease-in-out hover:text-[1.1rem]"
      >
        {typeOfLink}
      </a>
      {skills.map((skill) => (
        <p
          key={skill}
          className="ml-4 inline-flex w-fit rounded-[20px] border border-brand-primary p-[0.4rem] text-brand-primary transition-[font-size] duration-200 ease-in-out hover:text-[1.1rem]"
        >
          {skill}
        </p>
      ))}
    </div>
  );
}
