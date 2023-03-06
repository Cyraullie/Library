import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from "../components/Header";
import Footer from "../components/Footer";

import Home from '../screens/HomeScreen';
import About from '../screens/About';

export default function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
        </Routes>
      <Footer />
    </div>
  );
}