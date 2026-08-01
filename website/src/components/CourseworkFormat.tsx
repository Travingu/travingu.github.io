export interface CourseworkFormatProps {
  age: string;
  year: string;
  autumn: string[];
  winter: string[];
  spring: string[];
}

export default function CourseworkFormat({
  age,
  year,
  autumn,
  winter,
  spring,
}: CourseworkFormatProps) {
  return (
    <>
      <div className="float-left w-1/2 p-4">
        <h2>
          {age} Year | {year}
        </h2>
      </div>
      <div className="float-left w-1/2 p-4">
        <div className="float-left w-1/3 p-4">
          <h3>Autumn</h3>
          {autumn.map((course) => (
            <p key={course}>{course}</p>
          ))}
        </div>
        <div className="float-left w-1/3 p-4">
          <h3>Winter</h3>
          {winter.map((course) => (
            <p key={course}>{course}</p>
          ))}
        </div>
        <div className="float-left w-1/3 p-4">
          <h3>Spring</h3>
          {spring.map((course) => (
            <p key={course}>{course}</p>
          ))}
        </div>
      </div>
    </>
  );
}
