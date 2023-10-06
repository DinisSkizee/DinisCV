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

const App = () => {
  const [valid, setValid] = useState(false);

  return (
    <div className="bg-bgBlue ">
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
