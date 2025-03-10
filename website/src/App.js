import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./Components/Upload";

// import Navbar from "./Components/Navbar";
// import Home from "./Components/Home";
// import Portfolio from "./Components/Portfolio";
//import Gallery from "./Components/Gallery";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">

        <Upload/>
      </div>
    
    </BrowserRouter>
    
  );
}

export default App;
