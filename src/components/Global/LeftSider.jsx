import { useThemeStore } from "../../store/store";

export const LeftSider = () => {
  const { theme } = useThemeStore((state) => state);
  return (
    <div className="flex-col hidden w-4 gap-4 lg:flex fixed bottom-0 lg:left-12 2xl:left-24">
      <a
        className={`${
          theme === "dark" ? "text-white" : "text-bgDarkBlue"
        } text-sm -rotate-90`}
        href="mailto:dinissilvauk@gmail.com"
      >
        dinissilvauk@gmail.com
      </a>
      <div
        className={`ml-2 h-16 border-l border-foreground ${
          theme === "dark" ? "border-white" : "border-bgDarkBlue"
        }`}
      ></div>
    </div>
  );
};
