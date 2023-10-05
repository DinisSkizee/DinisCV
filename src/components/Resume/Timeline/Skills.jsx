const colors = {
  waveBlue: "bg-waveBlue",
  accenturePurple40: "bg-accenturePurple40",
  gold30: "bg-gold30",
  tech4good: "bg-tech4good",
  wildRed: "bg-wildRed",
  bgBlue: "bg-bgBlue",
  bgDarkBlue: "bg-bgDarkBlue",
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
