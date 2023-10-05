import SubTitle from "../SubTitle";
import Skills from "./Skills";
import ExperienceEducation from "./ExperienceEducation";

const WorkExperience = () => {
  return (
    <div>
      <SubTitle>{`.workExperience()`}</SubTitle>
      <Skills />

      <ExperienceEducation />
    </div>
  );
};

export default WorkExperience;
