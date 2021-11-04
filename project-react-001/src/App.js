import React from 'react'
import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Extracomp from './Components/Extracomp';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Extracomp />
    </div>
  );
}

export default App;
