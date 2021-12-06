import React from "react";

export default function DropDownMenu({
  handleWaldo,
  handleWalley,
  foundWaldo,
  foundWally,
}) {
  return (
    <div className="drop-down-menu">
      {foundWaldo ? null : <div onClick={handleWaldo}>Waldo</div>}
      {foundWally ? null : <div onClick={handleWalley}>Wally</div>}
    </div>
  );
}
