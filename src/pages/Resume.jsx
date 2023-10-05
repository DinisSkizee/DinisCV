import Timeline from "../components/Resume/Timeline/Timeline";
import WorkExperience from "../components/Resume/WorkExperience/WorkExperience";

const Resume = () => {
  return (
    <div
      id="resume"
      className="bg-bgBlue pt-[35%] md:text-lg pb-16 px-5 lg:px-[18%] md:px-12"
    >
      <h1 className="text-white text-5xl">{`.resume()`}</h1>

      <Timeline />

      <WorkExperience />
    </div>
  );
};

export default Resume;
