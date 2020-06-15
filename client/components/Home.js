import React from 'react'
import AboutMe from './AboutMe'

const Home = (props) => {
  console.log('props   ', props.prop)

  return (
    <div className='home' >
      <AboutMe />
    </div>
  )


}


export default Home
