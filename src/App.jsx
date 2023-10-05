import { useState } from "react";
import { Footer } from "./components/Global/Footer";
import { Header } from "./components/Global/Header";
import { LeftSider } from "./components/Global/LeftSider";
import { RightSider } from "./components/Global/RightSider";
import { AboutMe } from "./pages/AboutMe";
import { MainPage } from "./pages/MainPage";
import Resume from "./pages/Resume";
import PreSite from "./components/Global/PreSite";

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
