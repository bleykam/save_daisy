import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./navBar.jsx";
import PdfPage from "./PdfPage.jsx";
import HomePage from "./Home.jsx";

import { BrowserRouter, Routes, Route } from "react-router";
import DanTextsPage from "./danText.jsx";
import ShaynaTextsPage from "./ShaynaTexts.jsx";






export default function App() {


  return (
    <>
  <NavBar />
   

    <div>
        <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<HomePage  />} />
        <Route path="/dan-texts" element={<DanTextsPage />} />
        <Route path="/shayna-texts" element={<ShaynaTextsPage />} />
        <Route path="/pdfs" element={<PdfPage />} />
      </Routes>

      </BrowserRouter>  
    </div>
    </>
 
  );
}
