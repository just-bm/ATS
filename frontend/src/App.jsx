import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Dashbard from './components/Dashboard'
import History from './components/History'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={< Login/>} path='/login'/>
      <Route element={< Signup/>} path='/signup'/>
      <Route element={< Dashbard/>} path='/dashboard'/>
      <Route element={< History/>} path='/history'/>
      {/* <Route element={< Login/>} path='/login'/> */}
      {/* <Route element={< Login/>} path='/login'/> */}

    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
