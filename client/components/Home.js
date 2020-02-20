import React from 'react'
// import Axios from 'axios';


class Home extends React.Component{
    // componentDidMount = async() => {
    //   await Axios.get('/count').then((res) => console.log(res.data.value))
    // }

  render(){
     return(
    <div className='about' >


    <div id="text">
    <div className='softdev'>
      <h1>Enida Vezelaj</h1>
      <h3>Software engineer | NY</h3>
    </div>
    <div className='mystory'>
      <p>I am a New York based Software Developer. I taugh myself how to code for a couple of years until and I finally decided to persue this carreer and attend Grace Hopper at Fullstack Academy, where I obtained the foundations of frontend and backend development.
      I am experienced with Java Script, React, NERD Stack (Node.js, Express, React, Databases) and I know how to teach myself new technologies.
      I am passionate about what I do and I am motivated by new challanges.
      </p>
      </div>
      <div id="icons">
      <a href='https://github.com/Emis90'>
      <img className='contact-img' width="70" height="70" src="/images/github.png"/>
      </a>
      <a href="https://www.linkedin.com/in/enida-vezelaj/">
      <img className='contact-img' width="70" height="70" src="/images/linked.png"/>
      </a>
      <a href="mailto:enida.vezelaj@gmail.com">
      <img className='contact-img' width="70" height="70" src="/images/email-icon.png"/>
      </a>
      </div>
      </div>



      </div>
  )
  }

}
export default Home
