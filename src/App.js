import './App.css';
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { Routes, Route, Link } from "react-router-dom";

function App() {

    const [mode, setMode] = useState('light');

    const [bg, setBg] = useState('white');

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type
        });

        setTimeout(() => {
            setAlert(null);
        },2000);
    }

    const toggleMode = () => {
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = 'grey';
            showAlert("Changed to Mode", "success");
        }else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Changed to Light Mode", "success");
        }
    }

    const toggleBg = (color) => {
        setBg(color);
        document.body.style.backgroundColor = bg;
    }

  return (
    <>
        <Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} toggleBg={toggleBg}></Navbar>
        <div className={"container"}>
            <Alert alert={alert}></Alert>
        </div>
        <Routes>
            <Route exact path={"/"} element={<TextForm heading={"Enter your text to analyze"} mode={mode} showAlert={showAlert} bg={bg}/>}/>
            <Route exact path={"/about"} element={<About />}/>
        </Routes>
    </>
  );
}

export default App;
