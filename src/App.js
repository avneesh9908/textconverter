import './App.css';
import Navbar from './components/Navbar';
 import Textform from './components/Textform';
// import About from './components/About';
import Alert from './components/Alert';



import React, {useState} from 'react';


function App() {
  const [mode, setMode] = useState('light');  
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("dark mode is enbaled","sucess");
    }

    else
    {
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode is enbaled","sucess");
    }
  } 
   

  return (
    <>
    <Navbar title="Textution"mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Textform showAlert={showAlert} heading="Enter the text to analysis"mode={mode}/>
    {/* <About/> */}
    </div>
    </>   
  );
}

export default App;
