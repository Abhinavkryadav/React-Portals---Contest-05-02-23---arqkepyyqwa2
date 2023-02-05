import React, { useState, useRef } from "react";
import "../styles/App.css";
import PortalButton from "./PortalButton.js";
import PortalTextArea from "./PortalTextArea.js";

//complete the function
const App = () => {
  const inpref = useRef(null);
  const [val, setVal] = useState("");
  const changeText = () => {
    setVal(inpref.current.value);
    inpref.current.value = "";
  };

  return (
    <div id="main">
      <input id="input" ref={inpref}></input>
      <br />
      <PortalButton buttonclick={changeText} />
      <br />
      <PortalTextArea valu={val} />
    </div>
  );
};

export default App;
