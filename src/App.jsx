
import NavBar from "./navBar.jsx";
import PdfPage from "./PdfPage.jsx";
import HomePage from "./Home.jsx";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { BrowserRouter, Routes, Route } from "react-router";
import SMSConversation from "./danText.jsx";
import SmsThreadShayna from "./ShaynaTexts.jsx";






export default function App() {


  return (
    <>

 
   

    <div>
        <BrowserRouter future={{ v7_startTransition: true }}>
         <NavBar />
      <Routes>
        <Route path="/" element={<HomePage  />} />
        <Route path="/dan-texts" element={<SMSConversation />} />
        <Route path="/shayna-texts" element={<SmsThreadShayna />} />
        <Route path="/pdfs" element={<PdfPage />} />
      </Routes>

      </BrowserRouter>  
    </div>
   
    </>
 
  );
}
