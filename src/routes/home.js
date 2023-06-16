import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/main'
import Work from '../components/work'
import AboutContent from '../components/aboutContent'
import Footer  from '../components/footer'

const home = () => {
  return (
    <div>
      <Navbar />
      <Main />      
      
      <AboutContent />
      <Work />
      <Footer />

    </div>
  )
}

export default home
