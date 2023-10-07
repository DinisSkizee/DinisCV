import { Main } from "../components/Global/Main";
import { ScrollDown } from "../components/Global/ScrollDown";
import { useThemeStore } from "../store/store";

export const MainPage = () => {
  const { theme } = useThemeStore((state) => state);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-bgBlue" : "bg-bgBright"
      } w-full h-screen flex flex-col justify-between`}
    >
      <Main />

      <ScrollDown />
    </div>
  );
};
