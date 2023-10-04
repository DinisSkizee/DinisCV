import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LeftSider } from "./components/LeftSider";
import { RightSider } from "./components/RightSider";
import { AboutMe } from "./pages/AboutMe";
import { MainPage } from "./pages/MainPage";
import Resume from "./pages/Resume";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [valid, setValid] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.toLowerCase() === "flavio") {
      setValid(true);
    }
  };
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
        <div className="w-full h-screen flex flex-col items-center justify-center bg-bgblue text-white">
          <h1>IN CONSTRUCTION</h1>
          <h1>DINIS SILVA</h1>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder=""
            className="text-black"
          />
        </div>
      )}
    </>
  );
};

export default App;
