import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LeftSider } from "../components/LeftSider";
import { Main } from "../components/Main";
import { RightSider } from "../components/RightSider";
import { ScrollDown } from "../components/ScrollDown";

export const FirstPage = () => {
  return (
    <div className="bg-bgblue w-full h-screen flex flex-col justify-between">
      <Header />

      <LeftSider />
      <RightSider />

      <Main />

      <ScrollDown />

      <Footer />
    </div>
  );
};
