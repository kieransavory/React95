import React, { useState } from "react";

function AboutModal(props) {
  const { visible, onClose } = props;

  return (
    <div className="aboutmodal" style={{ display: visible ? "flex" : "none" }}>
      <div className="aboutmodalheading">
        <button title="Close" onClick={onClose}>
          ✖
        </button>
        <h2>About</h2>
      </div>
      <div className="abouttext">
        <h3>About me</h3>
        <p>
          Hi, my name is Kieran Savory! I am a junior web developer and I
          created this website as an enjoyable side project to test the
          capabilities of React.js and its ability in creating complex front end
          applications. I am particularly enamored by the subjectively beautiful
          yet simplistic aesthetic of Windows 95, and that along with various
          other Windows 95 portfolio websites inspired me to create my own
          version of the operating system within a web browser. Thankyou for
          visting this site!
        </p>
      </div>
      <span>Designed and developed by Kieran Savory.</span>
    </div>
  );
}

export default AboutModal;
