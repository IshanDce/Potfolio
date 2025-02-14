import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter ,Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import React from 'react'
import './index.css'
import Home from './Components/Home/Home.jsx'
import App from './App.jsx'
import Layout from './Components/Layout/Layout.jsx'
import Skills from './Components/Skills/Skill.jsx'
import Hire from './Components/Hire/Hire.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
     <Route path='/home' element={<Home/>}/>
     <Route path='/skill' element={<Skills />}/>  
     <Route path='/hire' element={<Hire/>}/>
     <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Route>
    

  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>  
)
