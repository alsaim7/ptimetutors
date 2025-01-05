import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { Navbar } from './navbar'
import { Contact } from './contact'
import { Banner } from './banner'
import { Watermark } from './watermark'
import { Description } from './description'
import { Jobs } from './jobs';

function AppContent() {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={
            <>
              <Banner />
              <Description />
            </>
          }
          />

          <Route path='/contact' element={
            <>
              <Banner />
              <Contact />
            </>
          } />

          <Route path='/jobs' element={
            <>
              <Jobs />
            </>
          } />
        </Routes>
      </main>
      <Watermark />
    </>
  )
}




function App() {
  return (
    <>
      <Router>
        <AppContent />
      </Router>
    </>
  )
}

export default App
