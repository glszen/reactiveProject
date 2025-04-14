import { useState } from 'react'    
import './App.css'
import './Button.css'
import './Review.css'
import './Progress.css'
import './Product.css'
import './Figure.css'
import Header from './Components/header'
import Section1 from './Components/section1'
import Section2 from './Components/section2'
import Section3 from './Components/section3'
import Section4 from './Components/section4'
import Section5 from './Components/section5'
import Footer from './Components/footer'

function App() {
  return (
    <body class="poppins-semibold fixed-page" >
    <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </body>
  )
}

export default App
