import React from 'react'
import {Link} from 'react-router-dom'

const Projects = () => {
  return (
    <div className="projects">
    <div className="proj">
     <h3>Grace in space</h3>
    </div>
    <div className="proj">
     <h3>Gelato app</h3>
    </div>
    <div className="proj">
     <h3>Cupcake store</h3>
    </div>
    <div className="button">
      <Link to='/'>Home</Link>
    </div>
    </div>
  )

}
export default Projects
