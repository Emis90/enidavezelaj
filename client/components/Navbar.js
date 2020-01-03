import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = React.memo( () => {
 return (
  <div className='navigation'>
  <div>
  <Link className='rootLinks' to='/'>Home</Link>
  </div>

  <div>
  <Link className='rootLinks' to='/projects'>Projects</Link>
  </div>

  <div>
  <Link className='rootLinks' to='/skills'>Skills</Link>
  </div>

  <div>
  <Link className='rootLinks' to='/resume'>Resume</Link>
  </div>

  <div>
  <Link className='rootLinks' to='/contact'>Contact</Link>
  </div>
  </div>
 )
 }
)
export default Navbar
