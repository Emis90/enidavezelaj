import React, { useEffect } from 'react'
import AboutMe from './AboutMe'

const Home = () => {
  useEffect(() => {
    console.log('Hello! If you are in the position of hiring Software Developers and currelty looking for a good candidate, please reach out to enida.vezelaj@gmail.com.')
  }, [])

  return (
    <div className='home' >
      <AboutMe />
    </div>
  )
}


export default Home
