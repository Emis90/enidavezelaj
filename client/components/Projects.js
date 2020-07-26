import React from "react";
import { motion } from "framer-motion";
class Projects extends React.Component {
  render() {
    return (
      <div id='projects'>
        <div
          className="proj"
          initial={{ y: 600 }}
          animate={{ y: 0 }}
          exit={{ y: 10 }}
          transition={{ duration: 1.2 }}
        >
          <div className="title">
            <img
              className="proj-icon"
              height="50"
              width="50"
              src="/images/orange.png"
            />
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
            </div>
            <ul id="div-stack">
              <li className="tech-used">React Native</li>
              <li className="tech-used">Firebase</li>
              <li className="tech-used">REST api (3rd party)</li>
              <li className="tech-used">Maps</li>
            </ul>
            <div className='links'>
              <a href="https://github.com/Emis90/Sweet">
                <img
                  className="proj-icon"
                  height="35"
                  width="35"
                  src="/images/github.png"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="proj">
          <div className='title'>
            <img className="proj-icon"
              height="50"
              width="50"
              src="/images/nyclogo.jpg"
            />
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
            </div>
            <ul id="div-stack">
              <li className="tech-used">Node.js</li>
              <li className="tech-used">Express</li>
              <li className="tech-used">PostgreSQL</li>
              <li className="tech-used">React</li>
              <li className="tech-used">Maps</li>
            </ul>
            <div className='links'>
              <a href="https://museumsofnyc.herokuapp.com">
                <img
                  className="proj-icon"
                  height="35"
                  width="35"
                  src="/images/world.png"
                />
              </a>
              <a href="https://github.com/Emis90/castelli">
                <img
                  className="proj-icon"
                  height="35"
                  width="35"
                  src="/images/github.png"
                />
              </a>
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
            <img
              className="proj-icon"
              height="50"
              width="50"
              src="/images/ship.png"
            />
            <h3>Grace in space</h3>
          </div>
          <div className="description">
            <div className='testo'>
              <p>
                Mobile Virtual Reality game with 3 levels of difficulty where players race against the clock to collect items
                floating away in space (around you) by tapping the screen.
                I planned the architecture of the game, set up Navigation and the Redux store, implemented Firebase for Oath and  Firestore database for keeping track of winning times.
                </p>
            </div>
            <ul id="div-stack">
              <li className="tech-used">Viro</li>
              <li className="tech-used">React Native</li>
              <li className="tech-used">Redux</li>
              <li className="tech-used">Firebase</li>
              <li className="tech-used">Firestore</li>
            </ul>
            <div className="links">
              <a href="https://www.youtube.com/watch?v=-HUuZn3BKrQ&feature=youtu.be">
                <img
                  className="proj-icon"
                  height="35"
                  width="35"
                  src="/images/world.png"
                />
              </a>
              <a href="https://github.com/graceinspace/graceInSpace">
                <img
                  className="proj-icon"
                  height="35"
                  width="35"
                  src="/images/github.png"
                />
              </a>
            </div>
          </div>
        </div>

        {/* <div
          className="proj"
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          exit={{ y: 10 }}
          transition={{ duration: 1.6 }}
        >
          <div className="title">
            <img
              className="proj-icon"
              height="50"
              width="50"
              src="/images/bank.png"
            />
            <h3>My ReactBank</h3>
          </div>
          <div className="description">
            <div className='testo'>
              <p>
                React Exercise for testing React hooks and forms. I used a faker server as backend.
                Input fields are validated, feel free to add a transaction or chanche your credentials.
              </p>
            </div>
            <div id="div-stack">
              <p className="tech-used">React</p>
              <p className="tech-used">Miragejs</p>
            </div>
            <div className='links'>
              <a href="https://myreactbank-1c7ef.web.app/">
                <img
                  className="proj-icon"
                  height="35"
                  width="35"
                  src="/images/world.png"
                />
              </a>
              <a href="https://github.com/Emis90/MyBankPage/tree/master/MyBank">
                <img
                  className="proj-icon"
                  height="35"
                  width="35"
                  src="/images/github.png"
                />
              </a>
            </div>
          </div>
        </div> */}
        <div
          className="proj"
          id="cupcakestore"
          initial={{ y: 800 }}
          animate={{ y: 0 }}
          exit={{ y: 10 }}
          transition={{ duration: 1.5 }}
        >
          <div className="title">
            <img
              className="proj-icon"
              height="50"
              width="50"
              src="/images/cupcake.png"
            />
            <h3>Cupcake store</h3>
          </div>
          <div className="description">
            <div className='testo'>
              <p>
                E-commerce website for out of this world cupcakes, available
                for purchace for both guest users and logged in users.
                It used relational database, user oath, state management and flexbox for styling.
              </p>
            </div>
            <ul id="div-stack">
              <li className="tech-used">Node.js</li>
              <li className="tech-used">React</li>
              <li className="tech-used">Redux</li>
              <li className="tech-used">PostgreSQL</li>
              <li className="tech-used">Passport</li>
            </ul>
            <div className='links'>
              <a href="https://fantasticsweetcupcakes.herokuapp.com">
                <img
                  className="proj-icon"
                  height="35"
                  width="35"
                  src="/images/world.png"
                />
              </a>
              <a href="https://github.com/fantastic-four-grace-shopper/grace-shopper">
                <img
                  className="proj-icon"
                  height="35"
                  width="35"
                  src="/images/github.png"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          className="proj"
          id="matchinev"
          initial={{ y: 1200 }}
          animate={{ y: 0 }}
          exit={{ y: 10 }}
          transition={{ duration: 1.7 }}
        >
          <div className='title'>
            <img className="proj-icon"
              src="/images/npm.png"
              height="50"
              width="50"
            />
            <h3>npm module</h3>
          </div>
          <div className="description">
            <div className='testo'>
              <p>
                Matching algorithm for two sets of people based off of the
                stable marriage problem.
              </p>
            </div>
            <div>
              <ul id="div-stack">
                <li className="tech-used">Node.js</li>
                <a href="https://www.npmjs.com/package/matchingev-one">
                  <li className="tech-used" style={{ fontWeight: 'bold' }}>npm</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Projects;
