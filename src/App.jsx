import './App.css'
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Qualification from './components/qualification/Qualification'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Scrollup from './components/scrollup/Scrollup'

function App () {
  return (
    <>
      <Navbar />
      <main className='main'>
        <Main />
        <About />
        <Skills />
        <Qualification />
        <Work />
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </>
  )
}

export default App
