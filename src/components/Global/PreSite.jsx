import { useState } from "react";

const PreSite = ({ setValid }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.toLowerCase() === "flavio") {
      setValid(true);
    }
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-bgBlue text-white">
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
