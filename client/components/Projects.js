import React from 'react'


class Projects extends React.Component {

  render() {
   return (
    <div className="projects">
      <div className="proj">
            <div className='card'>
            <div className='front'>
              <img height="50" width="50" src="/images/ship.png" />
              <div className="description">
              <h3>Grace in space</h3>
              <p>Mobile virtual reality game where the player collects items floating away in space.</p>
              </div>
            </div>
            <div className="back">
            <h4>Stack:</h4>
              <p>Viro, ReactNative, Redux Firebase/firestore</p>
              <h4>Contribution:</h4>
              <p className='contribution'>I planned the game and the features and directed coworkers on what approach to take on buidling the app. I buit the navigation between pages going from VR back to static React page. Last I set up the database to save user scores.</p>
              <div>
                <a href="https://github.com/graceinspace/graceInSpace">
                  <img width="30" height="30" src="/images/github.png"/>
                </a>
                </div>
            </div>
            </div>
      </div>
      <div className='proj'>
           <div className='card'>
            <div className='front'>
              <img height="50" width="50" src="/images/gelato.png" />
              <div className="description">
              <h3>Gelato finder</h3>
              <p>Mobile application for finding the best spots in the city</p>
              </div>
              </div>
              <div className="back">
              <h4>Stack:</h4>
              <p>React-Native, Firebase</p>
              <h4>Contribution:</h4>
              <p className='contribution'>I built this application on my own and focuses on making an ios app. I set up map and located stores in the city using
              a public api. I set up firestore so users can create a personal account and I set up a  database for logged in users to save their favorite destinations.</p>
              <div>
                <a href="https://github.com/Emis90/GelatoFinder">
                  <img width="30" height="30" src="/images/github.png"/>
                </a>
                </div>
              </div>
              </div>
      </div>

     <div className='proj'>
            <div className='card'>
            <div className='front'>
              <img height="50" width="50" src="/images/cupcake.png" />
              <div className="description">
              <h3>Cupcake store</h3>
              <p>E-commerce website for out of this world cupcakes!</p>
              </div>
              </div>
            <div className="back">
              <h4>Stack:</h4>
              <p>Sequelize, Express, React, Redux</p>
              <h4>Contribution</h4>
              <p className='contribution'>I contributed on every aspect of the project from building the database and setting relationships between tables to working on the front end writing components for the products to buiding the server side for guest users.</p>
              <div>
              <a href="https://fantasticsweetcupcakes.herokuapp.com">Buy some cupcakes!</a>
              </div>
                <div>
                <a href="https://github.com/fantastic-four-grace-shopper/grace-shopper">
                  <img width="30" height="30" src="/images/github.png"/>
                </a>
                </div>
              </div>
            </div>
      </div>
      <div className='proj'>
              <div className='card'>
              <div className='front'>
              <img src="/images/npm.png" />
              <div className="description">
              <h3>npm module</h3>
              <p>Matching alorithm for two sets of elements</p>
              <p>Its base off ofthe stable <span href="https://en.wikipedia.org/wiki/Stable_marriage_problem">marriage alorithm</span></p>
              </div>
              </div>
              <div className="back">
                <h4>Stack:</h4>
                <p>Node.js</p>
                <ul>
                  <li className='listBullet'>npm install matchingev-one</li>
                  <li className='listBullet'>have two sets of people with array of choises for the other team members each</li>
                  <li className='listBullet'>when needed call match(list1, list2)</li>
                  <li className='listBullet'>and voila! you will have pairs(or group of 3)</li>
                </ul>
                <div>
                <a href="https://www.npmjs.com/package/matchingev-">
                  <img width="30" height="30" src="/images/npm.png"/>
                </a>
                </div>
              </div>
              </div>

      </div>

          </div>
         );
    }
}





export default Projects
