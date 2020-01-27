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
              <div id='tech-used'>
              <p className='tech-used'>Node.js</p>
              <p className='tech-used'>PostgreSQL</p>
              <p className='tech-used'>React</p>
              </div>
              </div>
            </div>
            <div className="back">
              <p className='contribution'>Made a one time call to a public museum api, seeded my postgres database, added new info like rating, description, price and ghost presence. I set up the routes to get/change status of sold or available museums and used Passport.js for user authentication.
              I used React on the frontend and purposly kept all the components and map on the same page to let the client se changes in real time while searching based on preference.</p>

              <a href="https://museumsofnyc.herokuapp.com">Get your own museum!</a>
              <div>
                <a href="https://github.com/Emis90/castelli">
                 GitHub
                </a>
                </div>
            </div>
            </div>
      </div>
      <div className="proj" id='graceinspace'>
            <div className='card'>
            <div className='front'>
              <img className='proj-icon' height="50" width="50" src="/images/ship.png" />
              <div className="description">
              <h3>Grace in space</h3>
              <p>Mobile VR game where the player collects items floating away in space.</p>
              <div id='tech-used'>
              <p className='tech-used'>Viro</p>
              <p className='tech-used'>React Native</p>
              <p className='tech-used'>Redux</p>
              <p className='tech-used'>Firebase/Firestore</p>
              </div>
              </div>

            </div>
            <div className="back">
              <p className='contribution'>Set up initial stack, buit the navigation from dynamic VR component and static React component. I set up the redux store as state management system to allow better data passing throghout the app and fix the memory leakage. Lastly I implemented user authentication with Firebase and Firestore for database to store user points.</p>
              <div>
                <a href="https://github.com/graceinspace/graceInSpace">
                GitHub
                </a>
                </div>
            </div>
            </div>
      </div>
      <div className='proj' id='gelatofinder'>
           <div className='card'>
            <div className='front'>
              <img className='proj-icon' height="50" width="50" src="/images/gelato.png" />
              <div className="description">
              <h3>Gelato finder</h3>
              <p>Mobile application for finding the best sweet spots in the city</p>
              <div id='tech-used'>
              <p className='tech-used'>React Native</p>
              <p className='tech-used'>Firebase</p>
              </div>
              </div>
              </div>
              <div className="back">
              <p className='contribution'>This was my first React Native project where I used api a public for fetching name and location coordinates of sweet spots in NYC to display on a google map. I used a tab type navigation and I implemented Firebase user authentication and Firestore badabase for saving notes.</p>

              <div>
                <a href="https://github.com/Emis90/GelatoFinder">
                GitHub
                </a>
                </div>
              </div>
              </div>
      </div>

     <div className='proj' id='cupcakestore'>
            <div className='card'>
            <div className='front'>
              <img className='proj-icon' height="50" width="50" src="/images/cupcake.png" />
              <div className="description">
              <h3>Cupcake store</h3>
              <p>E-commerce website for out of this world cupcakes!</p>
              <div id='tech-used'>
              <p className='tech-used'>React Native</p>
              <p className='tech-used'>Firebase</p>
              <p className='tech-used'>Firestore</p>
              </div>
              </div>
              </div>
            <div className="back">
              <p className='contribution'>I planned the schema for database tables and set up relationships between users and orders. I seeded the database with data and set up routes. I wrote routes for a non-logged user shopping experience and lastly used Flexbox for styling.</p>
              <div>
              <a href="https://fantasticsweetcupcakes.herokuapp.com">Buy some cupcakes!</a>
              </div>
                <div>
                <a href="https://github.com/fantastic-four-grace-shopper/grace-shopper">
                GitHub
                </a>
                </div>
              </div>
            </div>
      </div>
      <div className='proj' id='matchinev'>
              <div className='card'>
              <div className='front'>
              <img className='proj-icon' src="/images/npm.png" />
              <div className="description">
              <h3>npm module</h3>
              <p>Matching alorithm for two sets of elements base off of the stable marriage alorithm</p>
              <div id='tech-used'>
              <p className='tech-used'>Node.js</p>
              </div>
              </div>
              </div>
              <div className="back">
                <p className='contribution'>Wrote and published to npm a matching algorith that will pair one group of people to the next based on each others preferene on each other.</p>

                <div>
                <a href="https://www.npmjs.com/package/matchingev-">
                GitHub
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
