import React from 'react'
import {Link} from 'react-router-dom'

const Contact = () => {
  return(
    <div className="contact">
     <h3>phone:8454538184</h3>
     <h3>email: enida.vezelaj@hotmail.it</h3>
     <div className="button">
      <Link className='linkhome' to='/'>Home</Link>
    </div>
    </div>

  )
}

export default Contact
