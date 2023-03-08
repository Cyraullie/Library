import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from "../components/Header";
import Footer from "../components/Footer";

import Home from '../screens/HomeScreen';
import AddBook from '../screens/NewbookScreen.js';
import Details from '../screens/DetailsScreen.js';
import Loan from '../screens/LoanScreen.js';
import Render from '../screens/RenderScreen.js';
import Login from '../screens/LoginScreen.js';

export default function App() {
  return (
    <div className="body">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddBook" element={<AddBook />} />
          <Route path="/Details" element={<Details/>} />
          <Route path="/Loan" element={<Loan/>} />
          <Route path="/Render" element={<Render/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      <Footer />
    </div>
  );
}