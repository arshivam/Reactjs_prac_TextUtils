import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=> {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0d3155';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <div className='my-2'>
    <Textform mode={mode}/>
    </div>
    </>
  );
}

export default App;
