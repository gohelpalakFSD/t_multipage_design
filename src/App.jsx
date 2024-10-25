import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Carreer from './components/pages/Carreer'
import Contact from './components/pages/Contact'
import Blog from './components/pages/Blog'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/carreer' element={<Carreer/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
