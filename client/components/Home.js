import React from 'react'
import {CSSTransition} from 'react-transition-group'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      view: true
    }
  }

  show = () => {
    this.setState({
      view: !this.state.view
    })
  }

  render(){

     return(
    <div className='about' >
    <div className='me'>
    {/* <CSSTransition
      classNames="window"
      in={this.state.view}
      timeout={350}
      unmountOnExit
      appear
      >
    <h1>Enida Vezelaj</h1>
    </CSSTransition> */}
    <CSSTransition
      classNames="window"
      in={this.state.view}
      timeout={600}
      unmountOnExit
      appear
      >
      <h3>About me</h3>
      </CSSTransition>
      <CSSTransition
       classNames="window"
       in={this.state.view}
       timeout={1000}
       unmountOnExit
       appear
       >
    <div className='slide'>
    <div id="text">
      <p>I am a New York base software developer am experienced working with Java Script, NERD Stack (Node.js, Express, React, Databases using SQL). I have been learning how to code and solve algorithms on my own and decided to persue this carreer. I graduated from Grace Hopper at Fullsdtack Academy of code, where i got my most recent education. I have learned to build fully functioning applications. I ma pasionate about solving real world problems using my knowlege in OOP.
      I am experienced building Postgres database with Sequelize, setting up routes and building REST apis with node and Express. I mostly worked with React on in the front end. I am good at working with people and I am focused on problem solving.</p>
      </div>
      <div id="btn">

      </div>
      </div>
      </CSSTransition>
      </div>
      </div>

  )
     }

}
export default Home
