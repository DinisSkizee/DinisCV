import { useStore } from "../../store/store";

const colors = {
  gold30: "bg-gold30",
  bgBlue: "bg-bgBlue",
  wildRed: "bg-wildRed",
  waveBlue: "bg-waveBlue",
  tech4good: "bg-tech4good",
  bgDarkBlue: "bg-bgDarkBlue",
  accenturePurple40: "bg-accenturePurple40",
};
export const SkillsSquare = ({ children, color, work }) => {
  const setSelectedSkills = useStore((state) => state.setSelectedSkills);
  const selectedSkills = useStore((state) => state.selectedSkills);

  const bgColor = colors[color] || "";

  const skillsHandler = () => {
    setSelectedSkills(children);
  };

  const isHighlighted = selectedSkills && selectedSkills.includes(children);
  return (
    <div
      className={`${bgColor} select-none py-1 px-2 rounded-lg flex items-center shadow-2xl w-fit ${
        work
          ? "py-1.5 text-xs text-white hover:bg-greeny hover:text-bgDarkBlue hover:font-medium"
          : ""
      } ${isHighlighted ? "bg-greeny !text-bgDarkBlue font-semibold" : ""}`}
      onClick={work ? skillsHandler : null}
    >
      {children}
    </div>
  );
};
