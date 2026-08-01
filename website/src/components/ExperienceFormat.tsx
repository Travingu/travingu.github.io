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
    <div className="m-4 rounded-2xl bg-brand-card">
      <img
        className="float-left mt-6 mr-4 mb-0 ml-4 rounded-[7px] border border-brand-dark bg-brand-image-bg p-1"
        src={imageLocation}
        alt={imageAlt}
        width={50}
        height={50}
      />
      <h3 className="mb-0 w-fit p-4">{experiences}</h3>
      <p className="m-0 ml-4 text-black">
        {company} | {date}
      </p>
      <div>
        {details.map((detail) => (
          <p key={detail} className="mt-0 block p-4">
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
}
