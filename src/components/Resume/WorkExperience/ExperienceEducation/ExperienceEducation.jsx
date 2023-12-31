import { useState } from "react";
import Education from "../Education";
import Experience from "../Experience";
import StateSelection from "./StateSelection";
import { useThemeStore } from "../../../../store/store";

const ExperienceEducation = () => {
  const { theme } = useThemeStore((state) => state);
  const [isExperience, setIsExperience] = useState(true);

  const handleSelection = (state) => {
    setIsExperience(state);
  };
  return (
    <div className="flex flex-col">
      <div
        className={`${
          theme === "dark" ? "bg-bgDarkBlue" : "bg-inactiveBlue"
        } mt-[2rem] w-full p-4 min-h-[300px]`}
      >
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
  );
};

export default ExperienceEducation;
