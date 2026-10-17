import { Routes, Route } from 'react-router-dom'
import HomeOne from './WeekOne/Pages/Home.jsx'
import DevLib from './DevLib.jsx' 

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeOne />} />
      <Route path="/DevLib" element={<DevLib />} />
    </Routes>
  )
}

export default App