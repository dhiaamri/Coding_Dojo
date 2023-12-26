import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tabs from './components/tabs'

function App() {
  const tabs=["content: tab1","content: tab2","content: tab3"]

  return (
    <>
     <Tabs tabs={tabs}></Tabs>
    </>
  )
}

export default App
