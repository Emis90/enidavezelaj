import React from "react"
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Cupakestore from './cupakestore'
import Gelatofinder from './gelatofinder'
import Graceinspace from './graceinspace'
import Map from './Map'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import secretKey from './secrets'


const Root = () => {
return (
  <Router>
    <div className='rootDiv'>
      <div id="name">
        <h1>Enida Vezelaj</h1>
        <h3>Front End Developer</h3>

      </div>
      <nav className='navbar'>
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
        {/* <Link to='/map'>---MAP---</Link> */}
        </div>
      </nav>

      <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/about' component={About}/>
       <Route exact path='/contact' component={Contact}/>
       <Route exact path='/projects' component={Projects}/>
       <Route exact path='/graceinspace' component={Graceinspace}/>
       <Route exact path='/gelatofinder' component={Gelatofinder}/>
       <Route exact path='/cupcakestore' component={Cupakestore}/>
       <Route exact path='/map' component={Map}/>
      </Switch>
    </div>
</Router>

  )
}

export default Root


