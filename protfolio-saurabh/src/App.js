import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Protfolio from "./Components/Protfolio";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import SocialLink from "./Components/Sociallinks";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Protfolio/>
        <Experience/>
        <Contact/>
        <Footer/>
        <SocialLink/>
    </div>
  );
}

export default App;
