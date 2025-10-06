import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from "@vercel/analytics/react"
import App from './App.jsx'
import './index.scss'
import Clarity from '@microsoft/clarity';

// Create a root and render the App into the #root div in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics /> 
    <Clarity projectId="tm648ektf9" />
  </React.StrictMode>
)
