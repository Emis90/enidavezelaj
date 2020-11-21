import React from "react";
import { motion } from "framer-motion";
class Projects extends React.Component {
  render() {
    return (
      <div id='projects'>
        <div
          className="proj"
          id="matchinev"
          initial={{ y: 1200 }}
          animate={{ y: 0 }}
          exit={{ y: 10 }}
          transition={{ duration: 1.7 }}>
          <div className='title'>
              <i class="fab fa-npm proj-icon"></i>
            <h3>npm module</h3>
          </div>
          <div className="description">
            <div className='testo'>
              <p>
                Matching algorithm based off of the
                stable marriage problem. The algorithm finds a stable matching between 
                two equally sized sets of elements given an ordering of preferences for each element. 
                a matching is stable when there does not exist any match (A, B) which both prefer each other to their current partner under the matching
              </p>
              <a className="links" href="https://www.npmjs.com/package/matchingev-one">
                <p>Website</p>
              </a>
            </div>
            <div className="div-stack">
              <ul>
                <li className="tech-used">Node.js</li>
                <li className="tech-used">npm</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="proj"
          initial={{ y: 600 }}
          animate={{ y: 0 }}
          exit={{ y: 10 }}
          transition={{ duration: 1.2 }}
        >
          <div className="title">
            <i class="fas fa-ice-cream proj-icon"></i>
            <h3>Goodie</h3>
          </div>
          <div className="description">
            <div className='testo'>
              <p>
                Mobile development for finding and saving all the best dessert spots in New York City and checking out the latest dessert recipes.
                I utilized three different pulic apis: weather, stores locations, dessert recipes.
                Users can only access through login, managed by Firebase.
                Submitting the wrong credentials will throw an error.
              </p>
              <a href="https://github.com/Emis90/Sweet" className='links'>
                <p>Github</p>
              </a>
            </div>
            <div className="div-stack">
            <ul>
              <li className="tech-used">React Native</li>
              <li className="tech-used">Firebase</li>
              <li className="tech-used">REST</li>
              <li className="tech-used">Maps</li>
            </ul>
            </div> 
          </div>
        </div>
        <div className="proj">
          <div className='title'>
            <i class="fas fa-university proj-icon"></i>
            <h3>NYC Real Estate</h3>
          </div>
          <div className="description">
            <div className='testo'>
              <p className='p'>Backend project testing routes</p>
              <p>
                Fullstack development focused on building REST api endpoints, React Hooks and Pagination.
                You can look up for the perfect museum based on location, price, rating and ghost presence.
                Log in to make a purchace.
            </p>
            <a href="https://museumsofnyc.herokuapp.com" className='links'>
                <p>Website</p>
              </a> 
              <a href="https://github.com/Emis90/castelli" className='links'>
                <p>Github</p>
              </a>
            </div>
            <div className="div-stack">
            <ul>
              <li className="tech-used">Node.js</li>
              <li className="tech-used">Express</li>
              <li className="tech-used">PostgreSQL</li>
              <li className="tech-used">React</li>
              <li className="tech-used">Maps</li>

            </ul>
            </div>
          </div>
        </div>
        <div
          className="proj"
          id="graceinspace"
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          exit={{ y: 10 }}
          transition={{ duration: 1.1 }}
        >
          <div className="title">
            <i class="fas fa-rocket proj-icon"></i>
            <h3>Grace in space</h3>
          </div>
          <div className="description">
            <div className='testo'>
              <p>
                Mobile Virtual Reality game where players race against the clock to collect items
                floating away in space by tapping the screen.
                I planned navigation between components, set up the Redux store, implemented Firebase for Oath and  Firestore for keeping track of winning times.
                </p>
              <a href="https://www.youtube.com/watch?v=-HUuZn3BKrQ&feature=youtu.be" className="links">
              <p>Youtube showcase</p>
              </a>
              <a href="https://github.com/graceinspace/graceInSpace" className="links">
              <p>Github</p>
              </a>
            </div>
            <div className="div-stack">
            <ul>
              <li className="tech-used">Viro</li>
              <li className="tech-used">React Native</li>
              <li className="tech-used">Redux</li>
              <li className="tech-used">Firebase</li>
              <li className="tech-used">Firestore</li>
            </ul>
            </div>
          </div>
        </div>
        <div
          className="proj"
          id="cupcakestore"
          initial={{ y: 800 }}
          animate={{ y: 0 }}
          exit={{ y: 10 }}
          transition={{ duration: 1.5 }}
        >
          <div className="title">
            <i class="fas fa-cookie proj-icon"></i>
            <h3>Cupcake store</h3>
          </div>
          <div className="description">
            <div className='testo'>
              <p>
                E-commerce website for out of this world cupcakes, available
                for purchace for both guest users and logged in users.
                It used relational database, user oath, state management and flexbox for styling.
              </p>
              <a href="https://fantasticsweetcupcakes.herokuapp.com" className="links">
                <p>Website</p>
              </a>
              <a href="https://github.com/fantastic-four-grace-shopper/grace-shopper" className="links">
                <p>Github</p>
              </a>
            </div>
            <div className="div-stack">
            <ul>
              <li className="tech-used">Node.js</li>
              <li className="tech-used">React</li>
              <li className="tech-used">Redux</li>
              <li className="tech-used">PostgreSQL</li>
              <li className="tech-used">Passport</li>
            </ul>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Projects;
