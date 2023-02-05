import React from "react";
import ReactDOM from "react-dom";

function PortalTextArea() {
  return ReactDOM.createPortal(
    <textarea id="text-field" style={{ display: "none" }} />,
    document.getElementById("portal-textfield")
  );
}

export default PortalTextArea;
