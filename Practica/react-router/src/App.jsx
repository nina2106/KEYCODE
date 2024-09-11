import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {


  return (
    <>
    {/* Enrutador General */}
    <BrowserRouter>
      <h1>Hola Mundo React Router Dom</h1>
       {/* Componente Menu */}
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/servicios" element={<Servicios />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
