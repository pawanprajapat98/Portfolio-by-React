import React from "react";
import SideNavbar from "./SideNavbar";         
import Home from "./Home";
import About from "./About";
import Code from "./Code";
import Bag from "./Bag";
import Portpoliyo from "./Portpoliyo";
import Contect from "./Contect";
import Graduation from "./Graduation";
import Educat from "./Educat";

// import { Router } from "react-router-dom";

import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Inturnship from "./Inturnship";

function App() {
  return (
    <>
      <BrowserRouter>
       <SideNavbar />
      <Routes> 
           <Route path="/" element={<Home/>}></Route>
           <Route path="/about" element={<About/>}></Route>
           <Route path="/Code" element={<Code/>}></Route>
           <Route path="/Bag" element={<Bag/>}></Route>
           <Route path="/Portpoliyo" element={<Portpoliyo/>}></Route>
           <Route path="/Contect" element={<Contect/>}></Route>

           <Route path="/Graduation" element={<Graduation/>}>
                  <Route path="/Graduation" element={<Educat/>}></Route>
                  <Route path="/Graduation/Inturnship" element={<Inturnship/>}></Route>
           </Route>
           
           
           </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App;
