import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register'
import Student from './components/Student'
import Prof from './components/Prof'
import ProfUpdate from './components/ProfUpdate'
import ProfDel from './components/ProfDel'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />}/>
      <Route path="/viewStudent" element={<Student />}/>
      <Route path="/prof" element={<Prof />}/>
      <Route path="/prof_del" element={<ProfDel />}/>
      <Route path="/prof_update" element={<ProfUpdate />}/>
    </Routes>
  </BrowserRouter>
)






