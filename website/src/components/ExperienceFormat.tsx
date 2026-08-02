export interface ExperienceFormatProps {
  experiences: string;
  details: string[];
  company: string;
  date: string;
  imageLocation: string;
  imageAlt: string;
}

export default function ExperienceFormat({
  experiences,
  details,
  company,
  date,
  imageLocation,
  imageAlt,
}: ExperienceFormatProps) {
  return (
    <div className="mb-4 flex flex-1 gap-4 rounded-2xl bg-brand-card p-4">
      <img
        className="h-[50px] w-[50px] shrink-0 rounded-[7px] border border-brand-dark bg-brand-image-bg p-1"
        src={imageLocation}
        alt={imageAlt}
        width={50}
        height={50}
      />
      <div className="flex flex-col gap-2">
        <h3 className="m-0">{experiences}</h3>
        <p className="m-0 text-black">
          {company} | {date}
        </p>
        <div className="flex flex-col gap-2">
          {details.map((detail) => (
            <p key={detail} className="m-0">
              {detail}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
