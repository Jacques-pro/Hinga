import React from 'react';
import Navbar from './Components/NavBar';
import './App.css';
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resources from './Components/pages/Resources';
import Crops from './Components/pages/crops';
import ContactUs from './Components/pages/ContactUs';
import SignUp from './Components/pages/SignUp';
import Tutorial from './Components/pages/Tutorial';
import Consulting from './Components/pages/Consulting';
import AboutUs from './Components/pages/AboutUs';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/resources' component={Resources} />
        <Route path='/crops' component={Crops} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/tutorial' component={Tutorial} />
        <Route path='/consulting' component={Consulting} />
        <Route path='/about-us' component={AboutUs} />
      </Routes>
    </Router>
  );
}

export default App;