import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useScrollTop } from './hooks/useScrollTop'
import Home from './features/Home/pages/Home'
import Projects from './features/Projects/pages/Projects'
import CaseStudy from './features/Projects/pages/CaseStudy'
import About from './features/About/pages/About'
import Contact from './features/Contact/pages/Contact'
import NotFound from './features/NotFound/pages/NotFound'
import Footer from './common/components/Footer/Footer'
import Header from './common/components/Header/Header'

function App() {
  useScrollTop()

  return (
    <div className='app'>
      <Header />
      <main className='app-content'>
        <Routes>
          <Route path='/' element={<Navigate to="/home" replace />} />
          <Route path='/home' element={<Home />} />
          <Route path='/projects' element={<Projects />}/>
          <Route path='/projects/:slug' element={<CaseStudy />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
