import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Complete from './pages/complete/Complete'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Complete' element={<Complete/>} />
      </Routes>
    </div>


  )
}

export default App
