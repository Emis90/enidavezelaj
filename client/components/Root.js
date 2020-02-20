import React from "react"
import Home from './Home'
import Contact from './Contact'
import Projects from './Projects'
import Skills from './Skills'
import Navbar from './Navbar'
import Resume from './Resume'

import NotFound from './NotFound'
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
       <Route exact path='/contact' component={Contact}/>
       <Route exact path='/resume' component={Resume}/>
       <Route exact path='/projects' component={Projects}/>
       <Route exact path='/skills' component={Skills}/>
       <Route exact path="*" component={NotFound} />
      </Switch>

    </div>
</Router>

  )
}

export default Root




// For anyone else ending up here with the same question. Make sure you build your client code before you push. I had the exact same problem, spent hours debugging only to realize i had forgotten to run ng-build -prod before pushing. My local changes was pushed but my client production code was obviously still the same. ;(
