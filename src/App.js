import React from 'react';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className='grid'>
       <Navbar />
       <Home />
    </div>
  );
}

export default App;

