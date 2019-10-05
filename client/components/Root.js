import React from "react"
import Home from './Home'
import Contact from './Contact'
import Projects from './Projects'
import Skills from './Skills'
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'


const Root = () => {
return (
  <Router>
  <div className='rootDiv'>
    <nav className='navbar'>
      <Navbar />
      </nav>
      <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/about' component={Contact}/>
       {/* <Route exact path='/contact' component={Contact}/> */}
       <Route exact path='/projects' component={Projects}/>
       <Route exact path='/skills' component={Skills}/>
      </Switch>
    </div>
</Router>

  )
}

export default Root


