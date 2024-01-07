import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Create from './components/Create'
import { Route, Routes } from 'react-router-dom'
import ViewOne from './components/ViewOne'
import Edit from './components/Edit'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Create/>} />
      <Route path='/api/products/:id' element={<ViewOne/>} />
      <Route path='/:id/edit' element={<Edit/>} />


    </Routes>
      
    </>
  )
}

export default App
