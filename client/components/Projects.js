import React from "react";
import { motion } from "framer-motion";
class Projects extends React.Component {
  render() {
    return (

      <motion.div
        className="projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="proj"
          id="museum"
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          exit={{ y: 10 }}
          transition={{ duration: 1 }}
        >
          <div className="card" data-test="container">
            <div className="front">
              <img
                className="proj-icon"
                height="50"
                width="50"
                src="/images/nyclogo.jpg"
              />
              <div className="description">
                <h3>NYC Museum Real Estate</h3>
                <p className='p'>Backend project testing routes</p>
                <div id="div-stack">
                  <p className="tech-used">Node.js</p>
                  <p className="tech-used">PostgreSQL</p>
                  <p className="tech-used">React</p>
                </div>
              </div>
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
            <div className="back">
              <p>
                Fullstack development showing the power of relational. Logged
                in users experience the real estate hunt for amazing NYC
                museums.
                </p>

            </div>
          </div>
        </motion.div>
        <motion.div
          className="proj"
          id="graceinspace"
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          exit={{ y: 10 }}
          transition={{ duration: 1.1 }}
        >
          <div className="card">
            <div className="front">
              <img
                className="proj-icon"
                height="50"
                width="50"
                src="/images/ship.png"
              />
              <div className="description">
                <h3>Grace in space</h3>
                <p className='p'>Virtual reality game with 3 levels</p>

                <div id="div-stack">
                  <p className="tech-used">Viro</p>
                  <p className="tech-used">React Native</p>
                  <p className="tech-used">Redux</p>
                  <p className="tech-used">Firebase</p>
                  <p className="tech-used">Firestore</p>
                </div>
              </div>
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
            <div className="back">
              <p>
                Mobile Virtual Reality game where players collect items
                floating away in space by tapping the screen. You can chose
                three different levels of difficulty and collect all your best
                times.
                </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="proj"
          id="gelatoFinder"
          initial={{ y: 600 }}
          animate={{ y: 0 }}
          exit={{ y: 10 }}
          transition={{ duration: 1.2 }}
        >
          <div className="card" data-test="container">
            <div className="front">
              <img
                className="proj-icon"
                height="50"
                width="50"
                src="/images/orange.png"
              />
              <div className="description">
                <h3>Goodie</h3>
                <p className='p'>Mobile app for dessert lovers</p>
                <div id="div-stack">
                  <p className="tech-used">React Native</p>
                  <p className="tech-used">Firebase</p>
                  <p className="tech-used">Firestore</p>
                  <p className="tech-used">Maps</p>
                </div>
              </div>
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
            <div className="back">
              <p>
                Mobile development for finding and saving all the best dessert spots in New York City and checking out the latest dessert recipes.
              </p>

            </div>
          </div>
        </motion.div>
        <motion.div
          className="proj"
          id="gelatofinder"
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          exit={{ y: 10 }}
          transition={{ duration: 1.6 }}
        >
          <div className="card">
            <div className="front">
              <img
                className="proj-icon"
                height="50"
                width="50"
                src="/images/bank.png"
              />
              <div className="description">
                <h3>My ReactBank</h3>
                <p className='p'>Testing React hooks and forms</p>
                <div id="div-stack">
                  <p className="tech-used">React</p>
                  <p className="tech-used">Miragejs</p>
                </div>
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
            <div className="back">
              <p>
                React Exercise using a faker server to make api calls and test
                react hooks. Make transactions or change your credentials
                using the provided validated forms.
              </p>

            </div>
          </div>
        </motion.div>
        <motion.div
          className="proj"
          id="cupcakestore"
          initial={{ y: 800 }}
          animate={{ y: 0 }}
          exit={{ y: 10 }}
          transition={{ duration: 1.5 }}
        >
          <div className="card">
            <div className="front">
              <img
                className="proj-icon"
                height="50"
                width="50"
                src="/images/cupcake.png"
              />
              <div className="description">
                <h3>Cupcake store</h3>
                <p className='p'>E-commerce website for fancy cupcakes</p>
                <div id="div-stack">
                  <p className="tech-used">Node.js</p>
                  <p className="tech-used">React</p>
                  <p className="tech-used">PostgreSQL</p>
                </div>
              </div>
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
            <div className="back">
              <p>
                E-commerce website for out of this world cupcakes, available
                for purchace for both guest users and logged in users.
                </p>

            </div>
          </div>
        </motion.div>
        <motion.div
          className="proj"
          id="matchinev"
          initial={{ y: 1200 }}
          animate={{ y: 0 }}
          exit={{ y: 10 }}
          transition={{ duration: 1.7 }}
        >
          <div className="card">
            <div className="front">
              <img className="proj-icon" src="/images/npm.png" />
              <div className="description">
                <h3>npm module</h3>
                <p className='p'>Matching algorithm </p>
                <div id="div-stack">
                  <p className="tech-used">Node.js</p>
                  <p className="tech-used">npm</p>
                </div>
              </div>
              <div className='links'>
                <a href="https://www.npmjs.com/package/matchingev-">
                  <img
                    className="proj-icon"
                    height="35"
                    width="35"
                    src="/images/world.png"
                  />
                </a>
              </div>
            </div>
            <div className="back">
              <p>
                Matching algorithm for two sets of people based off of the
                stable marriage problem.
              </p>
              <p>(  ... work in progress  )</p>

            </div>
          </div>
        </motion.div>
      </motion.div>

    );
  }
}

export default Projects;
