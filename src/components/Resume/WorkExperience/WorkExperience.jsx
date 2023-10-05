import Skills from "./Skills/Skills";
import SubTitle from "../SubTitle";
import ExperienceEducation from "./ExperienceEducation/ExperienceEducation";

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
