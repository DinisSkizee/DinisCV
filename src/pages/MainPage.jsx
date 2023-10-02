import { Main } from "../components/Main";
import { ScrollDown } from "../components/ScrollDown";

export const MainPage = () => {
  return (
    <div className="bg-bgblue w-full h-screen flex flex-col justify-between">
      <Main />

      <ScrollDown />
    </div>
  );
};
