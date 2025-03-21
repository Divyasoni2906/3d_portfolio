import { BrowserRouter } from "react-router-dom"
import { About,Contact, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"
import { useState } from "react"

const App = () => {
  const [toggle, setToggle] = useState(false); //for hamburger menu
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar toggle={toggle} setToggle={setToggle}/>
        <Hero toggle={toggle} setToggle={setToggle}/>
        </div>
        <About toggle={toggle} setToggle={setToggle}/>
        {/* <Experience/> */}
        <Tech/>
        <Works/>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
    </div>
    </BrowserRouter>
      
    
  )
}

export default App
