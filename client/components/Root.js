import React from "react"
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'



const Root = () => {
return (
  <Router>
    <div className='navbardiv'>
      <div id="name">
        <h1>Enida Vezelaj</h1>
        <h3>Front End Developer</h3>

      </div>
      <nav className='navbar'>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About me</Link>
        </div>
        <div>
        <Link to='/projects'>Projects</Link>
        <Link to='/contact'>Contact</Link>
        </div>
      </nav>

      <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/about' component={About}/>
       <Route exact path='/contact' component={Contact}/>
       <Route exact path='/projects' component={Projects}/>
      </Switch>
    </div>
</Router>

  )
}

export default Root


