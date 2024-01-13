import logo from './logo.svg';
import './App.css';
import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';
function App() {
  return (
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
