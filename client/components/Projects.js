import React from 'react'


class Projects extends React.PureComponent {

  render() {
   return (
    <div className="projects">
          <div className="proj" id='museum'>
            <div className='card'>
            <div className='front'>
              <img className='proj-icon' height="50" width="50" src="/images/museum.jpg" />
              <div className="description">
              <h3>Real Estate Website</h3>
              <p>Fullstck developemt to mimic a regular real estate website where users can find a cool museum</p>
              </div>
            </div>
            <div className="back">
            <h4>Stack:</h4>
              <p>Node.js, Sequelize, Express, React</p>
              <p className='contribution'>On the backend I used a public api of museums in NYC to seeded my Postgres databse, I added new info like rating, description, price and ghost presence. I set up the routes to get/change status of sold or available museums and used Passport.js for user authentication.
              I used React on the frontend and purposly kept all the components and map on the same page to let the client se changes in real time while searching based on preference.</p>
              <a href="https://museumsofnyc.herokuapp.com">Get your own museum!</a>
              <div>
                <a href="https://github.com/Emis90/castelli">
                  <img width="30" height="30" src="/images/github.png"/>
                </a>
                </div>
            </div>
            </div>
      </div>
      <div className="proj" id='graceinspace'>
            <div className='card'>
            <div className='front'>
              <img height="50" width="50" src="/images/ship.png" />
              <div className="description">
              <h3>Grace in space</h3>
              <p>Mobile VR game where the player collects items floating away in space.</p>
              </div>
            </div>
            <div className="back">
            <h4>Stack:</h4>
              <p>Viro, ReactNative, Redux, Firebase, firestore</p>
              <h4>Contribution:</h4>
              <p className='contribution'>I planned the game and the features and directed coworkers on what approach to take on buidling the app. I buit the navigation between pages going from VR back to static React page. I set up the redux store for a better data state management. Last I set up user authentication with Firebase and worked on Firestore to save each player's points.</p>
              <div>
                <a href="https://github.com/graceinspace/graceInSpace">
                  <img width="30" height="30" src="/images/github.png"/>
                </a>
                </div>
            </div>
            </div>
      </div>
      <div className='proj' id='gelatofinder'>
           <div className='card'>
            <div className='front'>
              <img height="50" width="50" src="/images/gelato.png" />
              <div className="description">
              <h3>Gelato finder</h3>
              <p>Mobile application for finding the best sweet spots in the city</p>
              </div>
              </div>
              <div className="back">
              <h4>Stack:</h4>
              <p>React-Native, Firebase</p>
              <h4>Contribution:</h4>
              <p className='contribution'>I built this application on my own and focuses on making an IOS app. I set up map and located stores in the city using
              a public api. I set up firestore so users can create a personal account and I set up a  database for logged in users to save their favorite destinations.</p>
              <div>
                <a href="https://github.com/Emis90/GelatoFinder">
                  <img width="30" height="30" src="/images/github.png"/>
                </a>
                </div>
              </div>
              </div>
      </div>

     <div className='proj' id='cupcakestore'>
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
      <div className='proj' id='matchinev'>
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
