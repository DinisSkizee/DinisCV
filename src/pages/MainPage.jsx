import { Main } from "../components/Global/Main";
import { ScrollDown } from "../components/Global/ScrollDown";

export const MainPage = () => {
  return (
    <div className="bg-bgBlue w-full h-screen flex flex-col justify-between">
      <Main />

      <ScrollDown />
    </div>
  );
};
