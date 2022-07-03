import React from "react";
//import ReactDOM from "react-dom";
import "./App.css";
import "./components/Usergo.jsx";

//import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Header,
  Navigation,
  Footer,
  Kidsp,
  Cycling,
  Boats,
  Birds,
  HandT,
  Form,
  Ddata,
  Areport,


} from "./components";

import Homeadmin from "./components/layouts/Home-admin/Homeadmin";
import Alldetails from "./components/Alldetails/Alldetails";






function App(){
  return(
    <div className="App">
      
  <Router>
    <Header />
    <Navigation />
    

    <Routes>
    
      <Route path="/kidsp" element={<Kidsp />} />
      <Route path="/cycling" element={<Cycling />} />
      <Route path="/boats" element={<Boats />} />
      <Route path="/birds" element={<Birds />} />
      <Route path="/handt" element={<HandT />} />
      <Route path="/form" element={<Form />} />
      <Route path="/Ddata" element={<Ddata />} />
  
      <Route exact path="/" element={<Homeadmin />} />
      <Route exact path="/view-all" element={<Alldetails />} />
      <Route exact path="/view-report" element={<Areport />} />



    </Routes>
    <Footer />
  </Router>
  </div>
  );
}

export default App;

