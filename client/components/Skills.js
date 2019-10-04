import React from 'react'
const TreeSource = 'https://www.telerik.com/kendo-react-ui/components/treeview/data-binding/'

const Skills = () => {
  return (
    <div className='skills'>

<div className='container'>
<p>Back-end</p>
       <div id='backend'>
       <p>Node.js</p>
       <p>Express.js</p>
       <p>Sequelize</p>
       <p>PostgresQL</p>
</div>
       </div>
<div className='container'>
<p>Front-end</p>
       <div id='frontend'>
       <p>HTML5/CSS3</p>
       <p>React</p>
       <p>Redux</p>
       </div>
</div>
<div className='container'>
<p>Familiar</p>
       <div id='familiar'>
       <p>SQL</p>
       <p>JQuery</p>
       </div>
</div>
<div className='container'>
<p>Extra-fun</p>
       <div id='funstuff'>
       <p>ViroReact(AR/VR)</p>
       <p>ReactNative</p>
       <p>Firebase/Firestore</p>
       </div>
</div>
</div>

  )
}


export default Skills
