import React from "react";
import "./Modal.css";

export default function Modal({ children, handleClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <br></br>
        <br></br>
        <button onClick={handleClose}>close</button>
      </div>
    </div>
  );
}
