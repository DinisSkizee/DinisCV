import { useSkillsStore, useThemeStore } from "../../store/store";

const colors = {
  greeny: "bg-greeny",
  gold30: "bg-gold30",
  bgBlue: "bg-bgBlue",
  bgBright: "bg-bgBright",
  wildRed: "bg-wildRed",
  waveBlue: "bg-waveBlue",
  tech4good: "bg-tech4good",
  bgDarkBlue: "bg-bgDarkBlue",
  bgBrightBlue: "bg-bgBrightBlue",
  accenturePurple40: "bg-accenturePurple40",
};
export const SkillsSquare = ({ children, color, work }) => {
  const { theme } = useThemeStore((state) => state);
  const setSelectedSkills = useSkillsStore((state) => state.setSelectedSkills);
  const selectedSkills = useSkillsStore((state) => state.selectedSkills);

  let bgColor;

  if (color === "bgBlue" || color === "bgDarkBlue") {
    bgColor =
      theme === "dark"
        ? colors[color]
        : "bg-inactiveBlue text-inactiveContrast";
  } else {
    bgColor = colors[color];
  }

  const skillsHandler = () => {
    setSelectedSkills(children);
  };

  const isHighlighted = selectedSkills && selectedSkills.includes(children);
  return (
    <div
      className={`${bgColor} select-none py-1 px-2 rounded-lg flex items-center shadow-2xl w-fit ${
        work
          ? `py-1.5 text-xs hover:bg-greeny hover:font-medium ${
              theme === "dark"
                ? "text-white hover:bg-greeny hover:text-bgDarkBlue"
                : "hover:bg-bgBrightBlue font-semibold"
            }`
          : ""
      } ${isHighlighted ? "!bg-greeny !text-bgDarkBlue font-semibold" : ""}`}
      onClick={work ? skillsHandler : null}
    >
      {children}
    </div>
  );
};
