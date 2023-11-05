import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage'; // Assuming you have a HomePage component
// import AboutPage from './components/AboutPage'; // Assuming you have an AboutPage component
// import TradePage from './components/TradePage'; // Assuming you have a TradePage component
// import AccountPage from './components/AccountPage'; // Assuming you have an AccountPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* <Route path="/trade" element={<TradePage />} /> */}
            {/* <Route path="/account" element={<AccountPage />} /> */}
            {/* Other routes as needed */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
