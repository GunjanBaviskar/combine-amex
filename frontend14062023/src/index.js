import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider, } from 'react-router-dom'
import Home from './page/Home';
import About from './page/About';
import Menu from './page/Menu';
import Contact from './page/Contact';
import Login from './page/Login';
import StudyBooks from './page/NewBooks';
import Signup from './page/Signup';
import NewBooks from './page/NewBooks';

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path='Menu' element={<Menu/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='NewBooks' element={<NewBooks/>}/>
      <Route path='Signup' element={<Signup/>}/>

    </Route>
  )
)
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

reportWebVitals();
