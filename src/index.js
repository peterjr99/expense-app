import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//import Navbarrr from "./components/navbarrr"
//import NavBar from "./components/navbar"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </React.StrictMode>
  
);

