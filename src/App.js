import React from 'react';
import { ReactDOM } from 'react-dom';
// import Navbar from './components/Navbar';
import './App.css';
import Home from './component/pages/Home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Services from './component/pages/Services';
import Contact from './component/pages/Contact';
import About from './component/pages/About';
import NotFound from './component/pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact={true} element={<Home/>} />
          <Route path='/services'exact={true}   element={<Services/>} />.
          <Route path='/contact' exact={true}  element={<Contact/>} />
          <Route path='/about' exact={true}  element={<About/>} />
          <Route path='*' exact={true}  element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
