import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from "./Routes.js";
import "./App.css"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
