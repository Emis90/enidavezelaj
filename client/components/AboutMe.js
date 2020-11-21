import React from 'react'

const AboutMe = () => {
  return (
    <div id='about'>
      <div className='name'>
        <h1>Enida Vezelaj</h1>
        <h3>Software Engineer</h3>
        <br />
      </div>
      <div className='mystory'>
        <p>I am a New York based Software Engineer with expertise in front end development. I am experienced designing, building and maintaining
        web and mobile applications. I am proficient in Javascript, React, Redux, realtional databases such as PostgreSQL as well as cloud database like Firestore and I do often use external libraries and new technologies.
        I am a solution-oriented person, a restless thinker and resilient developer that doesnt shy away from difficulties.
        Im my experience working in a team I value people that learn and support each other and have strong work ethitcs.
        </p>
      </div>
      <div id="icons">
        <a href='https://github.com/Emis90'>
          <i class="fab fa-github contact-img"></i>
        </a>
        <a href="https://www.linkedin.com/in/enida-vezelaj/">
          <i class="fab fa-linkedin-in contact-img"></i>
        </a>
        <a href="mailto:enida.vezelaj@gmail.com">
        <i class="far fa-envelope contact-img" ></i>
        </a>
      </div>
    </div>
  )
}


export default AboutMe