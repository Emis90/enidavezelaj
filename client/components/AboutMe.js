import React from 'react'


const AboutMe = () => {
  return (
    <div id='about'>
      <div className='name'>
        <h1>Enida Vezelaj</h1>
        <h3>Fullstack Engineer and Web Developer</h3>
        <br />
      </div>
      <div className='mystory'>
        <p>I am a New York based Fullstack Engineer with expertise in Front-End Development. I am experienced designing, building and maintaining
        web and mobile applications. I am proficient in Javascript, React, Redux, realtional databases such as PostgreSQL as well as cloud database like Firestore and I do often use external libraries and new technologies.
        I am a solution-oriented person, a restless thinker and resilient developer that doesnt shy away from difficulties.
        Im my experience working in a team I value people that learn and support each other and have strong work ethitcs.
      </p>
      </div>
      <div id="icons">
        <a href='https://github.com/Emis90'>
          <img className='contact-img' width="70" height="70" src="/images/github.png" />
        </a>
        <a href="https://www.linkedin.com/in/enida-vezelaj/">
          <img className='contact-img' width="70" height="70" src="/images/linked.png" />
        </a>
        <a href="mailto:enida.vezelaj@gmail.com">
          <img className='contact-img' width="70" height="70" src="/images/kiss.png" />
        </a>
      </div>
    </div>
  )
}


export default AboutMe