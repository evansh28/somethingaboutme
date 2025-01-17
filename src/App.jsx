import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import About from './Components/About'
import Technology from './Components/Technology'
import Exprience from './Components/Exprience'
import Project from './Components/Project'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">

      <div className="fixed top-0 -z-10 h-full w-full">

      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#1AA_100%)]"></div>
      </div>

      <div className="container mx-auto px-8">

      <NavBar />
      <Hero/>
      <About/>
      <Technology />
      <Exprience />
      <Project />
      <Contact />
      </div>
    </div>
  )
}

export default App
