import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
 return (
  <div className='navigation'>
  <div>
  <Link className='rootLinks' to='/'>Home</Link>
  </div>
  <div>
  <Link className='rootLinks' to='/about'>About me</Link>
  </div>
  <div>
  <Link className='rootLinks' to='/projects'>Projects</Link>
  </div>
  <div>
  <Link className='rootLinks' to='/contact'>Contact</Link>
  </div>
  <div>
  <Link className='rootLinks' to='/skills'>Skills</Link>
  </div>
  <div>
  </div>
  </div>
 )
}

export default Navbar
