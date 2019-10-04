import React from 'react'
import {Link} from 'react-router-dom'

const Projects = () => {
  return (
  <div className="projects">
   {/* <img id="baloons" src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" /> */}
    <div id="grace">
    <Link className="projectGrace" to="/graceinspace">Grace in space</Link>
    </div>
    <div id='gelato'>
    <Link className="projectGelato" to="/gelatofinder">Gelato app</Link>
    </div>
    <div id='cupcake'>
    <Link className="projectCupcake" to="/cupcakestore">Cupcake store</Link>
    </div>
  </div>
  )

}
export default Projects
