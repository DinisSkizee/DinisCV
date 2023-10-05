import { useState } from "react";
import Resume from "./pages/Resume";
import { AboutMe } from "./pages/AboutMe";
import { MainPage } from "./pages/MainPage";
import PreSite from "./components/Global/PreSite";
import { Footer } from "./components/Global/Footer";
import { Header } from "./components/Global/Header";
import { LeftSider } from "./components/Global/LeftSider";
import { RightSider } from "./components/Global/RightSider";

const App = () => {
  const [valid, setValid] = useState(false);

  return (
    <>
      {valid ? (
        <>
          <Header />
          <LeftSider />
          <RightSider />
          {/* FIRST PAGE */}
          <MainPage />

          {/* SECOND PAGE */}
          <AboutMe />

          {/* THIRD PAGE */}
          <Resume />
          <Footer />
        </>
      ) : (
        <PreSite setValid={setValid} />
      )}
    </>
  );
};

export default App;
