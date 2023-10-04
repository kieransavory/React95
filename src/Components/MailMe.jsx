import React, { useState } from "react";

function MailMe() {
  const [clicked, setSingleClick] = useState(false);
  const [doubleClicked, setDoubleClicked] = useState(false);

  function singleClickHandler() {
    setSingleClick(!clicked);
  }

  function doubleClickHandler() {
    setDoubleClicked(!doubleClicked);
    window.location = "mailto:kieransavory@hotmail.com";
  }

  return (
    <button
      onDoubleClick={doubleClickHandler}
      onClick={singleClickHandler}
      className="icondiv"
    >
      <img
        style={{
          backgroundColor: clicked ? "rgba(0, 0, 150, 0.795)" : "transparent",
          border: clicked ? "1px dashed white" : "none"
        }}
        src="https://64.media.tumblr.com/28f7d41869ff8aec052777020eeb6242/3f276049d15c8c6e-91/s540x810/385b0d2b0f77ad276bbbdc640695b2b71a483d7a.png"
        alt="Mail Icon"
      />
      <p
        style={{
          backgroundColor: clicked ? "rgba(18, 18, 250, 0.795)" : "transparent",
          border: clicked ? "1px dashed white" : "none"
        }}
      >
        Contact Me
      </p>
    </button>
  );
}

export default MailMe;
