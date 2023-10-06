import Skills from "./Skills/Skills";
import SubTitle from "../../Global/SubTitle";
import ExperienceEducation from "./ExperienceEducation/ExperienceEducation";

const WorkExperience = () => {
  return (
    <div>
      <Skills />
      <SubTitle>{`.workExperience()`}</SubTitle>

      <ExperienceEducation />
    </div>
  );
};

export default WorkExperience;
