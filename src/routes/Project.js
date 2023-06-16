import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Main2 from '../components/main2'
import Work from '../components/work'


const project = () => {
  return (
    <div>
      <Navbar />
      <Main2 heading="Projects" content="A detail about projects" />
      <Work />
      <Footer />
    </div>
  )
}

export default project
