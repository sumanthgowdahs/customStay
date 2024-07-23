import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Rooms from '../components/Rooms'
import Customize from '../components/Customize'
import Book from '../components/Book'
import './App.css'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rooms' element={<Rooms/>}/>
        <Route path='/costomize' element={<Customize/>}/>
        <Route path='/book' element={<Book/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App