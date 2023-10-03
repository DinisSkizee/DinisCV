const colors = {
  waveBlue: "bg-waveBlue",
  accenturePurple40: "bg-accenturePurple40",
  gold30: "bg-gold30",
  tech4good: "bg-tech4good",
  wildRed: "bg-wildRed",
};
export const Skills = ({ children, color }) => {
  const bgColor = colors[color] || "";

  return (
    <div
      className={`${bgColor} p-1 px-2 rounded-lg flex items-center shadow-2xl`}
    >
      {children}
    </div>
  );
};
