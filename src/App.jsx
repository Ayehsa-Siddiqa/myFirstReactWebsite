 import React from 'react' 
 import {Route, Routes } from 'react-router-dom'
 import Home from './pages/Home'
 import About from './pages/About'
  import Services from './pages/Services'
  import Contact from './pages/Contact'
import Navbar from './pages/Navbar' 
function App() { 

  return (
    <> 
       <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/> 
          <Route path='/about' Component={About}/> 
          <Route path='/services' Component={Services}/> 
          <Route path='/contact' Component={Contact}/> 
          <Route path='*' Component={Home}/>
        </Routes>
    </>
  )
}

export default App
