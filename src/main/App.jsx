import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';

import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Home from '../components/Home/Home';
import Footer from '../components/template/Footer';

const App = props => 
  <div className="app">
    <Logo />
    <div className="app-content">
      <Nav />
      <Home />
    </div>
    <Footer />
  </div>

export default App