import React from 'react'
import {CSSTransition} from 'react-transition-group'

class Home extends React.Component {

  render(){
     return(
    <div className='about' >
    <div className='me'>
    <h1>Enida Vezelaj</h1>
      <div>
      <h3>About me</h3>
      <img src='/images/heart.png' width='40' height='40'/>
      </div>
    <div className='slide'>
    <div id="text">
      <p>I am a New York based software developer. I have been learning how to code and solve algorithms on my own and decided to persue this carreer. I attended the Grace Hopper bootcamp at Fullsdtack Academy of code, where I got my most recent education.  I am experienced working with Java Script, NERD Stack (Node.js, Express, React, Databases). I love coming up with solutions and learning new ways to approach a problem, this is why I decided to do software development.
      </p>
      </div>
      <div id="btn">
      </div>
      </div>
      </div>
      </div>
  )
  }

}
export default Home
