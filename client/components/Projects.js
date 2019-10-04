import React from 'react'
import {Link} from 'react-router-dom'
import { Window } from '@progress/kendo-react-dialogs';




class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };

    }

    render() {
        return (
          <div className="projects">

              <div className="grace">
              <img height="50" width="50" src="/images/ship.png" />
              <div className="description">
              <h3>Grace in space</h3>
              <p>Mobile virtual reality game. The player can chose easy/medium/hard difficulties</p>
              <p>save his scores by logging into his/her credentials.</p>
              <h3>Stack:</h3>
              <p>Viro, ReactNative, Redux, Firebase</p>
              </div>
              </div>

              <div className='gelato'>
              <img height="50" width="50" src="/images/gelato.png" />
              <div className="description">
              <h3>Gelato finder</h3>
              <p>Find amazing sports in the city for your next gelato treat.</p>
              <h3>Stack:</h3>
              <p>ReactNative, Firebase</p>
              </div>
              </div>

              <div className='cupcake'>
              <img height="50" width="50" src="/images/cupcake.png" />
              <div className="description">
              <h3>Cupcake store</h3>
              <p>E-commerce website for out of this world cupcakes</p>
              <h3>Stack:</h3>
              <p>Sequelize, Express, React, Redux</p>
              </div>
              </div>

              <div className='npmMatching'>
              <img src="/images/npm.png" />
              <div className="description">
              <h3>npm module</h3>
              <p>Matching alorithm for two groups of people</p>
              <p>Feel free to npm install matchingev-one and </p>
              <p>pass two objects to the matching function!</p>
              <h3>Tech used:</h3>
              <p>Node.js</p>
              </div>
              </div>
           </div>
        );
    }
}





export default Projects
