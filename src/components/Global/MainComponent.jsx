import { useEffect } from "react";
import { useThemeStore } from "../../store/store";

const MainComponent = ({ id, children }) => {
  const { theme } = useThemeStore((state) => state);
  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <div
      id={id}
      className={`${
        theme === "dark" ? "bg-bgBlue" : "bg-bgBright"
      } pt-[20%] md:text-lg pb-16 px-5 lg:px-[12%] md:px-12 2xl:px-[20%]`}
    >
      {children}
    </div>
  );
};

export default MainComponent;
