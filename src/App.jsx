
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Header from './Components/Header/Header'
import Projects from './Components/Project/Projects'
import Skill from './Components/Skills/Skill'
import NavBar from './wrapper/Navbar'
import AboutWebPage from './Components/AboutWebPage'
import Certifications from './Components/Certification/Certifications'
import Educations from './Components/Educations/Educations'
import Footer from './wrapper/Footer'

function App() {

  return (
    <>
    <NavBar/>
    <Header/>
        <About/>
        <Projects/>
        <Skill/>
        <Certifications/>
        <Educations/>
        <Contact/>
        {/* <AboutWebPage/> */}
        <Footer/>
    </>
  )
}

export default App
