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
  const bgColor = colors[color] || "";

  return (
    <div
      className={`${bgColor} py-1 px-2 rounded-lg flex items-center shadow-2xl w-fit ${
        work ? "py-1.5 text-xs text-white" : ""
      }`}
    >
      {children}
    </div>
  );
};
