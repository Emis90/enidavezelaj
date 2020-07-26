import React, { useEffect } from 'react'
import AboutMe from './AboutMe'

const Home = () => {
  useEffect(() => {
    console.log('Hello! If you are in the position of hiring Software Developers you can reach out to enida.vezelaj@gmail.com. I could be a good fit for your company. And if I am not a match, I know many talented Develoepers I wouldn t mind recommending!')
  }, [])

  return (
    <div className='home' >
      <AboutMe />
    </div>
  )
}


export default Home
