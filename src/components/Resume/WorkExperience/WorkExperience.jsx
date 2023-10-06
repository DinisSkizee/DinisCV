import Skills from "./Skills/Skills";
import SubTitle from "../../Global/SubTitle";
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
