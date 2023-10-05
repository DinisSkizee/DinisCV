import { useState } from "react";
import SubTitle from "../SubTitle";
import StateSelection from "./StateSelection";
import Experience from "./Experience";
import Education from "./Education";

const WorkExperience = () => {
  const [isExperience, setIsExperience] = useState(true);

  const handleSelection = (state) => {
    setIsExperience(state);
  };
  return (
    <div>
      <SubTitle>{`.workExperience()`}</SubTitle>
      <div className="flex flex-col">
        <div className="bg-bgDarkBlue mt-[2rem] w-full p-4 min-h-[300px]">
          {/* STATES */}
          <div className="flex mb-6">
            <StateSelection
              handleSelection={handleSelection}
              isExp={true}
              isExperience={isExperience}
            />
            <StateSelection
              handleSelection={handleSelection}
              isExp={false}
              isExperience={isExperience}
            />
          </div>

          {isExperience ? <Experience /> : <Education />}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default WorkExperience;
