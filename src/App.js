import './App.css';
import { useState } from "react";
import DropDownMenu from './components/DropDownMenu';
import Header from './components/Header';
import Main from './components/Main';

function App() {

  const [waldoClient, setWaldoClient] = useState({
    cliX: 0,
    cliY: 0,
  });

  const [walleyClient, setWalleyClient] = useState({
    cliX: 0,
    cliY: 0,
  });

  const [foundWaldo, setFoundWaldo] = useState(false);
  const [foundWally, setFoundWally] = useState(false);

  const handleClickImage = (e) => {

    console.log(e.clientX, e.clientY);

    const drop_down = document.querySelector(".drop-down-menu");

    if (drop_down.style.display === "block") drop_down.style.display = "none";

    else {

      drop_down.style.top = `${e.clientY + window.scrollY}px`;
      drop_down.style.left = `${e.clientX}px`;
      drop_down.style.display = "block";
      drop_down.style.position = "absolute";

      setWaldoClient((prevState) => ({
        ...prevState,
        cliX: e.clientX,
        cliY: e.clientY
      }));

      setWalleyClient((prevState) => ({
        ...prevState,
        cliX: e.clientX,
        cliY: e.clientY
      }));


    }

  };

  const handleWaldo = () => {
    if (
      waldoClient.cliX >= 1035 &&
      waldoClient.cliX <= 1055 &&
      waldoClient.cliY >= 150 &&
      waldoClient.cliY <= 176
    ) {
      alert("Hurray! You have found out Waldo.");
      setFoundWaldo(true);
    } else alert("Oops, try again!");
  };

  const handleWalley = () => {

    if (
      walleyClient.cliX >= 114 &&
      walleyClient.cliX <= 130 &&
      walleyClient.cliY >= 453 &&
      walleyClient.cliY <= 495
    ){
      alert("Hurray! You have found out Wally.");
      setFoundWally(true);
    }

    else alert("Oops, try again!");
  };

  const resetHandle = () => {
      setFoundWally(false);
      setFoundWaldo(false);
  }

  return (
    <div className="App">
       <Header foundWaldo = {foundWaldo} foundWally = {foundWally} resetHandle = {resetHandle}/>
       <Main handleClickImage = {handleClickImage}/>
       <DropDownMenu handleWaldo = {handleWaldo} handleWalley = {handleWalley}foundWaldo = {foundWaldo} foundWally = {foundWally} />
     </div>
  );
}

export default App;
