import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Calculator from './pages/Calculator.tsx'
import Home from './pages/Home.tsx'
import Hobbies from './pages/Hobbies.tsx'
import JSON from './pages/JSON.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Home />}></Route>
      <Route path="/calc" element={<Calculator />}></Route>
      <Route path="/hobbies" element={<Hobbies />}></Route>
      <Route path="/json" element={<JSON />}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)


