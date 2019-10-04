import React from "react"
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Skills from './Skills'
import Cupakestore from './projects/cupakestore'
import Gelatofinder from './projects/gelatofinder'
import Graceinspace from './projects/graceinspace'
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
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
       <Route exact path='/about' component={About}/>
       <Route exact path='/contact' component={Contact}/>
       <Route exact path='/projects' component={Projects}/>
       <Route exact path='/skills' component={Skills}/>
       <Route exact path='/graceinspace' component={Graceinspace}/>
       <Route exact path='/gelatofinder' component={Gelatofinder}/>
       <Route exact path='/cupcakestore' component={Cupakestore}/>
      </Switch>
    </div>
</Router>

  )
}

export default Root


