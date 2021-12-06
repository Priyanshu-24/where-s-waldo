import React from "react";
import wally from "../images/wally.jpg";
import waldo from "../images/waldo.jpg";

function Header({ foundWaldo, foundWally, resetHandle }) {
  return (
    <div className="header">
      <div>FIND WALDO & WALLY</div>
      {foundWaldo ? null : (
        <div>
          <img src={waldo} alt="waldo" />
        </div>
      )}
      {foundWally ? null : (
        <div>
          <img src={wally} alt="wally" />
        </div>
      )}
      <button onClick = {resetHandle}>Reset</button>
      {/* <div>3:00</div> */}
    </div>
  );
}

export default Header;
