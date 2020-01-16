import React from 'react'


class Skills extends React.PureComponent{
render(){
  return (
   <div className='skills'>
   <div id='backend'>
     <div className='title'>
      <img width='40' height='40' src='/images/database.png'/>
     </div>
     <div className='stack'>
     <p>Node.js</p>
     <p>Webpack</p>
     <p>Babel</p>
     <p>Express.js</p>
     <p>Sequelize</p>
     <p>SQL</p>
     <p>PosgresQL</p>
     <p>Firebase/Firestore</p>
     </div>
   </div>
   <div id='frontend'>
     <div className='title'>
     <img width='40' height='40' src='/images/computer.png'/>
     </div>
     <div className='stack'>
     <p>JavaScript</p>
     <p>HTML5</p>
     <p>CSS3</p>
     <p>React</p>
     <p>React Native</p>
     <p>Redux</p>
     <p>Viro(VR/AR)</p>
     </div>
   </div>
   <div id='general'>
       <div className='title'>
       <img width='50' height='50' src='/images/face.png'/>
       </div>
   <div className='stack'>
     <p>Problem solver</p>
     <p>Great at communicating</p>
     <p>Great team worker</p>
     <p>Creative</p>
     <p>Hard working</p>
     <p>Passionate</p>
     <p>Driven</p>
   </div>
   </div>
   </div>

  )
 }
}


export default Skills
