import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/Projects/ProjectsPage'

function App() {

  return (
    <main>
      <Navbar/>
      <section className='main-section'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* <Route path="/" element={<HomePage />}/> */}
        </Routes>
      </section> 
      <Footer/>
    </main>
  )
}

export default App
