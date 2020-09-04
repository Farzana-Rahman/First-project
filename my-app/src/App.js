import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Routing from './Components/Routing';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
      <Navbar/>
      <Routing/>
      </BrowserRouter>

    
      </div>
  
   
  );
}

export default App;

