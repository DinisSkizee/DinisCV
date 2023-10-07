import { useThemeStore } from "../../store/store";

const SubTitle = ({ children }) => {
  const { theme } = useThemeStore((state) => state);
  return (
    <h3
      className={`${
        theme === "dark" ? "text-white" : "text-bgDarkBlue"
      } text-3xl ml-1 pt-12 select-none`}
    >
      {children}
    </h3>
  );
};

export default SubTitle;
