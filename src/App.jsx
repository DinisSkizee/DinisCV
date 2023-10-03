import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LeftSider } from "./components/LeftSider";
import { RightSider } from "./components/RightSider";
import { AboutMe } from "./pages/AboutMe";
import { MainPage } from "./pages/MainPage";

const App = () => {
  return (
    <>
      <Header />
      <LeftSider />
      <RightSider />
      {/* FIRST PAGE */}
      <MainPage />

      {/* SECOND PAGE */}
      <AboutMe />
      <AboutMe />
      <Footer />
    </>
  );
};

export default App;
