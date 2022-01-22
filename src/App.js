import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Navbar from './components/Layout/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Category from './components/pages/Category'

function App () {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes >
           <Route path='/' element={<Home/>} />
           <Route path='/about' element={<About />} />
           <Route path='/category' element={ <Category />} />
          
           <Route path='/contact' element={<Contact />} />
        </Routes>

        
        
      </div>
    </Router>
  )
}

export default App
