import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from "@vercel/analytics/react";
import App from './App.jsx'
import './index.scss'
import './spacelab.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const root = document.getElementById("root");

// Create a root and render the App into the #root div in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React>
    <App />
    <Analytics /> 

  </React>
)
