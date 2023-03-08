import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from "../components/Header";
import Footer from "../components/Footer";

import Home from '../screens/HomeScreen';
import AddBook from '../screens/NewbookScreen.js';
import Details from '../screens/DetailsScreen.js';

export default function App() {
  return (
    <div className="body">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddBook" element={<AddBook />} />
          <Route path="/Details" element={<Details/>} />
        </Routes>
      <Footer />
    </div>
  );
}