import React from 'react'


class Skills extends React.Component{
expand = (event) => {
event.item.opened = !event.item.opened;
this.forceUpdate();
}

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
     <p>Firebase</p>
     <p>Firestore</p>
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
     <p>Viro(vr/ar)</p>
     </div>
   </div>
   <div id='general'>
       <div className='title'>
       <img width='40' height='40' src='/images/face.png'/>
       </div>
   <div className='stack'>
     <p>Problem solving</p>
     <p>Communication</p>
     <p>Team work</p>
     <p>Creativity</p>
     <p>Hard working</p>
   </div>
   </div>
   </div>

  )
 }
}


export default Skills
