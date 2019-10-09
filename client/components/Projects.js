import React from 'react'
import {Link} from 'react-router-dom'
import Gelatofinder from './projects/gelatofinder'

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
              <p></p>
              </div>
            </div>
            <div className="back">
            <h3>Stack:</h3>
              <p>Viro</p>
              <p>ReactNative</p>
              <p>Redux</p>
              <p>Firebase</p>
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
              <h3>Stack:</h3>
              <p>React-Native</p>
              <p>Firebase</p>
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
              <h3>Stack:</h3>
              <p>Sequelize</p>
              <p>Express</p>
              <p>React</p>
              <p>Redux</p>

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
                <h3>Stack:</h3>
                <p>Node.js</p>
                <p>Feel free to download it!</p>
                <ul>
                  <li>npm install matchingev-one</li>
                  <li>have two sets of people with array of choises for the other team members each</li>
                  <li>when needed call match(list1, list2)</li>
                  <li>and voila! you will have pairs(or group of 3)</li>
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
