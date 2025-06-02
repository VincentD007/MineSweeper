import { Routes, Route } from 'react-router-dom'
import Login from './login.jsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/:username'>
        <Route path='home'/>
        <Route path='record'/>
        <Route path='game'/>
      </Route>
    </Routes>
  )
}

export default App
