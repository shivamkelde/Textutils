import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import AlertDismissible from './components/Alert1';
import React from 'react';



// import About from './components/About';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [clickedTime, setClickedTime] = useState(0);
  const [color, setColor] = useState("Green");
  let count = () => {
    let Clicked = clickedTime + 1;
    setClickedTime(Clicked);
    if (mode === "dark") {
      if (Clicked % 3 === 2) {
        document.body.style.background = "#4c0000";//Red dark Color
        setColor("Blue");
      }
      else if (Clicked % 3 === 0) {
        document.body.style.background = "#0d0d36";//blue
        setColor("Green");
      }
      else {
        document.body.style.background = "#013e01";//green
        setColor("Red");
      }
    }

  }
  const showAlert = (type, msg) => {
    setAlert({
      messege: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }


  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "Success");
      setColor("Green");
      setClickedTime(0);
      document.title = "Textutils";
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "#0d0d36";
      showAlert("Dark Mode is Enabled", "Success");
      document.title = "Textutils-DarkMode Enabled";
    }
  }
  return (
    <>

        <Navb title="Textutils" About="About Me" Mode={mode} Home="Home" ToggleMode={toggleMode} count={count} darkcolor={color} />
        <AlertDismissible Alert={alert} />
        <div className="container my-3">
        
            <TextForm Heading="Enter the text below" Mode={mode} showAlert={showAlert} color={color} />
            
        </div>
      
    </>
  );
}
export default App;
