import React ,{useState, useRef} from 'react'
import '../styles/App.css';
import PortalButton from "./PortalButton";
import PortalTextArea from "./PortalTextArea";

function App() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <input id="input" type="text" onChange={handleTextChange} />
      <PortalButton text={text} />
      <PortalTextArea />
    </>
  );
}

export default App;

