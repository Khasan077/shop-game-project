import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import './index.css'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
