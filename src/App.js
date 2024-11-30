import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", 'success');
    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode has been disabled", 'success');
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch> */}
            <Routes>
              <Route exact path='/about' element={<About />}></Route>
              {/* <Route path='users/'>
                <Users /> 
              </Route> */}
              <Route exact path='/' element={<TextForm heading="Exter the text to analyse below" mode={mode} showAlert={showAlert} />}></Route>
            </Routes>
          {/* </Switch> */}
        </div>
      </Router>
    </>
  );
}

export default App;
