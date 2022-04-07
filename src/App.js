import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React,{useState} from 'react';

// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert =(message,type)=>{
      setAlert ({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#3B3B3B';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
    <BrowserRouter>
<Navbar title = "TextUtils" about = "About Us" mode = {mode} toggleMode = {toggleMode}/>
<Alert alert = {alert}/>
<div className="container my-3" >
<Routes>
          <Route exact path="/About"
            element = {<About />}/>
          <Route exact path="/"
            element = {<TextForm heading = "Enter the text to analyze below" mode = {mode} showAlert = {showAlert}/>} 
          />
          {/* </Route> */}
</Routes>
</div>
</BrowserRouter>
    </>
    );
}

export default App;
