import './App.css'
import Form from './components/Form'
import { Routes,Route,Link } from 'react-router-dom'
import People from './components/People'
import ShowPlanet from './components/ShowPlanet'
import Error from './components/Error'


function App() {

  return (
    <div>
   <Form/>
    <Routes>
    <Route path='/' />
    <Route path='/:choice/:id' element={<People/>} />
    <Route path='/:id' element={<ShowPlanet/>} />
    <Route path='/error' element={<Error/>} />
    <Route path='/*' element={<Error/>} />
    </Routes>
    </div>
  )
}

export default App
