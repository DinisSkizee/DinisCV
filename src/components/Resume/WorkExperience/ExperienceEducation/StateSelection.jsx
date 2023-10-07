import { useThemeStore } from "../../../../store/store";

const StateSelection = ({ handleSelection, isExp, isExperience }) => {
  const { theme } = useThemeStore((state) => state);
  return (
    <div
      className={`${
        isExp
          ? isExperience
            ? theme === "dark"
              ? "text-white bg-bgLessBlue"
              : "!text-bgDarkBlue bg-inactiveBluer"
            : theme === "dark"
            ? "!text-white"
            : "!text-bgDarkBlue"
          : !isExperience
          ? theme === "dark"
            ? "text-white bg-bgLessBlue"
            : "!text-bgDarkBlue bg-inactiveBluer"
          : theme === "dark"
          ? "!text-white"
          : "!text-bgDarkBlue"
      } text-white px-2 py-1 select-none cursor-pointer`}
      onClick={() => handleSelection(isExp)}
    >
      {isExp ? "Experience" : "Education"}
    </div>
  );
};

export default StateSelection;
