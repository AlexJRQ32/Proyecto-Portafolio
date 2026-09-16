import './App.css'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
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

  // Known routes get Header/Footer; unknown routes (404) render standalone
  const { pathname } = useLocation()
  const knownRoutes = ['/home', '/projects', '/about', '/contact']
  const isKnownRoute = knownRoutes.some((r) => pathname === r || pathname.startsWith(`${r}/`))

  return (
    <div className={isKnownRoute ? 'app' : 'app app--bare'}>
      {isKnownRoute && <Header />}
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
      {isKnownRoute && <Footer />}
    </div>
  )
}

export default App
