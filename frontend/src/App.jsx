import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Dashbard from './components/Dashboard'
import History from './components/History'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Dashbard/> */}
      <History/>
    </>
  )
}

export default App
