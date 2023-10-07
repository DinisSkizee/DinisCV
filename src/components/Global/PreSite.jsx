import { useState } from "react";
import { useThemeStore } from "../../store/store";

const PreSite = ({ setValid }) => {
  const [inputValue, setInputValue] = useState("");
  const { theme } = useThemeStore((state) => state);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.toLowerCase() === "flavio") {
      setValid(true);
    }
  };
  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-center text-white ${
        theme === "dark" ? "bg-bgBlue" : "bg-bgBright"
      }`}
    >
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
  );
};

export default PreSite;
