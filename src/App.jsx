import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/Projects/ProjectsPage'

function App() {

  return (
    <>
      <Navbar/>
      <main className='app-body'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* <Route path="/" element={<HomePage />}/> */}
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
