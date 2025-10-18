import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Dashbard from './components/Dashboard'
import History from './components/History'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
          < Signup/>
</BrowserRouter>
      {/* <Dashbard/> */}
      {/* <History/> */}
    </>
  )
}

export default App
