import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes,
  Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

import './index.css';
import App from './App';
import Login from './routes/login';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>You seem lost.</p>
          <a href="/">Click here</a> to go back to the homepage.
        </main>
      }
    />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
