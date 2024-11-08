import { useState } from 'react'
import viteLogo from '/vite.svg'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Mywork from './Component/MyWork/Mywork'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
 <><Navbar />
 <Hero />
 <About />
 <Mywork/>
 <Contact/>
 <Footer/>
 </>
  )
}

export default App
