import React from 'react'

import { Navbar } from "./components"
import { Home, About, Projects, Services } from "./containers"

function Application() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Home /> 
        <About /> 
        <Projects /> 
        <Services />
      </div>  
    </>
    )
}

export default Application