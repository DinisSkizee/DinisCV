import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

export const MyContext = createContext();

function Main() {
  const [state, setState] = useState(Boolean);

  return (
    <MyContext.Provider value={{ state, setState }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MyContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
