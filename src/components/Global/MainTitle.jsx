import { useThemeStore } from "../../store/store";

const MainTitle = ({ children }) => {
  const { theme } = useThemeStore((state) => state);
  return (
    <h1
      className={`${
        theme === "dark" ? "text-white" : "text-bgDarkBlue"
      } md:text-5xl select-none justify-center w-full flex text-4xl`}
    >
      {children}
    </h1>
  );
};

export default MainTitle;
