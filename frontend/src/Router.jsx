import { Routes, Route } from 'react-router-dom'
import HomeOne from './WeekOne/Pages/Home.jsx'
import HomeTwo from './WeekTwo/Pages/Home.jsx'
import RustTwo from './WeekTwo/Pages/Rust.jsx'
import DevLib from './DevLib.jsx' 

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeTwo />} />
      <Route path="/HomeOne" element={<HomeOne />} />
      <Route path="/RustTwo" element={<RustTwo />} />
      <Route path="/DevLib" element={<DevLib />} />
    </Routes>
  )
}

export default App