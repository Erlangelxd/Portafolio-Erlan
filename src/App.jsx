import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <About />
      <Technologies />
      <Experience/>
      <Projects />
      <Contact />
    </div>
  )
}

export default App