import React from "react";
import background from "../images/main-background.jpeg";

function Main({handleClickImage}) {


  return (
    <div className="container" >
      <img src={background} alt="background" onClick={(e) => handleClickImage(e)}/>
    </div>
  );
}

export default Main;
