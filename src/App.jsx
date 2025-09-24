import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarBoots from './components/NavBarBoots.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'
import SuccessPage from './components/SuccessPage.jsx'
import ReportPage from './components/ReportPage.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarBoots />
        <Routes>
          <Route path='/' element={<ReportPage saludo='Reportar un problema' />} />
          <Route path='/reportar/' element={<ReportPage saludo='Reportar un problema' />} />
          <Route path='/exito/' element={<SuccessPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App