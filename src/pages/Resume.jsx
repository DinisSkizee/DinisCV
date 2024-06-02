import MainComponent from "../components/Global/MainComponent";
import MainTitle from "../components/Global/MainTitle";
import Timeline from "../components/Resume/Timeline/Timeline";
import WorkExperience from "../components/Resume/WorkExperience/WorkExperience";

const Resume = () => {
  return (
    <MainComponent id="resume">
      <MainTitle>
        {`.about(`}
        <span className="text-greeny -mt-2">me</span>
        {`)`}
      </MainTitle>

      <Timeline />

      <WorkExperience />
    </MainComponent>
  );
};

export default Resume;
