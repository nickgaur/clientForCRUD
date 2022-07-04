
import './App.css';
import Card from './Components/Card'
import React from 'react';
import { BrowserRouter, Routes, Router, Route, Link } from 'react-router-dom';
import Home from './Components/Home';


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      {/* <ToastContainer className="toast" position='top-center'/> */}
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/addnew' element={<Card/>} />
        <Route path='/update/:id' element={<Card/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App
