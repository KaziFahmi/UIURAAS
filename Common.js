import React from "react";
import Body from "../Middleware/Body";
function Common(props) {
  return (
    <>
      <div className="header">
        <p>This is header</p>
      </div>
      <Body />

      <div className="footer">copyright © 2023</div>
    </>
  );
}

export default Common;
