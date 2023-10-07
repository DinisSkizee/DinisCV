import { useState } from "react";
import Resume from "./pages/Resume";
import { AboutMe } from "./pages/AboutMe";
import { MainPage } from "./pages/MainPage";
import PreSite from "./components/Global/PreSite";
import { Footer } from "./components/Global/Footer";
import { Header } from "./components/Global/Header";
import { LeftSider } from "./components/Global/LeftSider";
import { RightSider } from "./components/Global/RightSider";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useThemeStore } from "./store/store";

const App = () => {
  const [valid, setValid] = useState(true);
  const { theme } = useThemeStore((state) => state);
  return (
    <div className={`${theme === "dark" ? "bg-bgBlue" : "bg-bgBright"}`}>
      {valid ? (
        <>
          <Header />
          <LeftSider />
          <RightSider />

          <MainPage />

          <AboutMe />

          <Resume />

          <Projects />

          <Contact />

          <Footer />
        </>
      ) : (
        <PreSite setValid={setValid} />
      )}
    </div>
  );
};

export default App;
