import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import AboutModal from "./AboutModal";
import Shutdown from "./Shutdown";

function Taskbar() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [programsHovered, setProgramsHovered] = useState(false);
  const [documentsHovered, setDocumentsHovered] = useState(false);
  const [settingsHovered, setSettingsHovered] = useState(false);

  const [shutdownClicked, setshutdownClicked] = useState(false);
  const [aboutClicked, setAboutClicked] = useState(false);

  function btnClickHandler() {
    setButtonClicked(!buttonClicked);
  }

  function programsHoverState() {
    setProgramsHovered(!programsHovered);
  }

  function documentsHoverState() {
    setDocumentsHovered(!documentsHovered);
  }

  function settingsHoverState() {
    setSettingsHovered(!settingsHovered);
  }

  function aboutHandler() {
    setAboutClicked(!aboutClicked);
    setButtonClicked(!buttonClicked);
  }

  function shutdownHandler() {
    setshutdownClicked(!shutdownClicked);
    setButtonClicked(!buttonClicked);
  }

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setButtonClicked(buttonClicked);
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  const clickedStyle = {
    borderRight: "3px solid lightgrey",
    borderBottom: "3px solid lightgrey",
    borderLeft: "3px solid rgb(59, 59, 59)",
    borderTop: "3px solid rgb(59, 59, 59)"
  };

  return (
    <>
      {aboutClicked ? <AboutModal /> : ""}

      <Shutdown shutdown={shutdownClicked} />

      <div className="taskbar">
        {/* Start menu button */}
        <button
          style={buttonClicked ? clickedStyle : null}
          onClick={btnClickHandler}
          className="startbtn"
        >
          <span>Start</span>
        </button>
        <Clock />
        {/* Start menu */}
        <div
          style={{ display: buttonClicked ? "flex" : "none" }}
          className="startmenu"
        >
          <ul>
            {/* Programs start menu  */}
            <li
              onMouseEnter={programsHoverState}
              onMouseLeave={programsHoverState}
            >
              <span style={{ textDecoration: "underline" }}>P</span>
              rograms <span className="startmenuarrows">&#9654;</span>
              {/* Programs aside list */}
              <div
                style={{ display: programsHovered ? "flex" : "none" }}
                className="programslist"
              ></div>
              {/* Documents start menu */}
            </li>
            <li
              onMouseEnter={documentsHoverState}
              onMouseLeave={documentsHoverState}
            >
              {" "}
              <span style={{ textDecoration: "underline" }}>D</span>ocuments
              <span className="startmenuarrows"> &#9654; </span>
              {/* Documents aside menu */}
              <div
                style={{ display: documentsHovered ? "flex" : "none" }}
                className="documentslist"
              ></div>
            </li>

            <li
              onMouseEnter={settingsHoverState}
              onMouseLeave={settingsHoverState}
            >
              {" "}
              <span style={{ textDecoration: "underline" }}>S</span>ettings
              <span className="startmenuarrows"> &#9654; </span>
              <div
                style={{ display: settingsHovered ? "flex" : "none" }}
                className="settingslist"
              >
                {" "}
                <ul className="submenu">
                  <li>Wallpaper</li>
                  <li>Time</li>
                  <li>Test</li>
                </ul>
              </div>
            </li>
            <li>
              {" "}
              <span style={{ textDecoration: "underline" }}>F</span>ind
            </li>
            <li onClick={aboutHandler}>
              {" "}
              <span style={{ textDecoration: "underline" }}>A</span>bout
            </li>
            <li
              onClick={shutdownHandler}
              style={{ marginTop: "1rem", borderTop: "2px solid black" }}
            >
              {" "}
              <span style={{ textDecoration: "underline" }}>S</span>
              hut Down
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Taskbar;
