import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './features/Home/pages/Home'
import Projects from './features/Projects/pages/Projects'
import About from './features/About/pages/About'
import Contact from './features/Contact/pages/Contact'
import Footer from './common/components/Footer/Footer'
import Header from './common/components/Header/Header'

function App() {

  return (
    <div className='app'>
      <Header />
      <main className='app-content'>
        <Routes>
          <Route path='/' element={<Navigate to="/home" replace />} />
          <Route path='/home' element={<Home />} />
          <Route path='/projects' element={<Projects />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
