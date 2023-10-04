import React from "react";

function Shutdown(props) {
  const Shutdown = props;

  return (
    <div
      style={{ display: Shutdown.shutdown === true ? "flex" : "none" }}
      className="bluescreen"
    ></div>
  );
}

export default Shutdown;
