import { useState } from 'react'
import './App.css'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import Number from './components/Number'

function App() {

  return (
    <>
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/:variable/:color2/:color1" element={<Number />}/>
      <Route path="/:variable" element={<Number />}/>
    </Routes>
    </>
  )
}

export default App
