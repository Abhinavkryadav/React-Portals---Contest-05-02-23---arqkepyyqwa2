import React, { useState } from "react";
import ReactDOM from "react-dom";

function PortalButton({ text }) {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(true);
  };

  return ReactDOM.createPortal(
    <>
      <button id="button" onClick={handleClick}>
        Click
      </button>
      {showText && (
        <textarea
          id="text-field"
          value={text}
          readOnly
          style={{ display: "none" }}
        />
      )}
    </>,
    document.getElementById("portal-button")
  );
}

export default PortalButton;
