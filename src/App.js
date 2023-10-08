import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import MyAccordion from './components/MyAccordion';

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");

  const showAlert = (message, type) =>
    setAlert({
      msg: message,
      type: type,
    });
  setTimeout(() => {
    setAlert(null);
  }, 1500);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
      <Alert alert={alert}/>
        <Routes>

          <Route path="/" element={<TextForm showAlert={showAlert} heading="TextEditor - word counter, character counter, remove extra spaces" mode={mode}/>}/>
          <Route   path="/MyAccordion" element={<MyAccordion mode={mode}/>} />
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
