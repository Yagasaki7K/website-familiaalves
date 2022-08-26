import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import './index.css'

import ReactDOM from "react-dom/client";
import Arvore from './page/Arvore';
import Historia from './page/Historia';
import Andrea from './page/filhos/Andrea';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/arvore" element={<Arvore />} exact />
                <Route path="/historia" element={<Historia />} exact />

                <Route path="/filhos/andrea" element={<Andrea />} exact/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)