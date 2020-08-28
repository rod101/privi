import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navcomp from './components/Navcomp';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Application from './pages/Sdsapplicationform';
import Hwapprove from './pages/Hwapprove';

function App() {
  return (
    <Router>
      <div>
        <Navcomp />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/product" component={Products} />
          <Route path="/service" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/booking" component={Booking} />
        <Route path="/Application" component={Application} />
        <Route path="/hwapprove" component={Hwapprove} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
