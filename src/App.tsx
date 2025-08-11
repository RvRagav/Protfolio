import './index.css'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Custom Cursor */}
      {window.innerWidth > 768 && <CustomCursor />}
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About/>

      {/* Skills Section */}
      <Skills/>

      {/* Projects Section */}
      <Projects/>

      {/* Experience Section */}
      <Experience />
      
      {/* Education Section */}
      <Education/>

      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>
    </div>
  )
}