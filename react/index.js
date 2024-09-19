import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './Components/AboutUs';
import ContactUs  from './Components/ContactUs';
import Student from './Components/Student';
import Faculty from './Components/Faculty';
import Home from './Components/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<App />} >
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/Student" element={< Student/>} />
                <Route path="/Faculty" element={<Faculty />} />
                <Route path="/Home" element={<Home/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
);
