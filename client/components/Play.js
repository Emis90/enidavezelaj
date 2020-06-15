import React from 'react';
import axios from 'axios';
import { key } from './../../Recipes'

class Play extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    const getApi = async function (query) {
      try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`)
        let data = res.data.recipes
        this.setState({
          data: data
        })

      } catch (error) {
        console.log('api call failed >>', error)
      }
    }
    getApi('dessert')
    // this.setState({
    //   recipes: rec
    // })

    // console.log(this.state.recipes)
  }


  render() {
    console.log(this.state.recipes)
    return (
      <div id='recipes'>
        {this.state.recipes.map((one, idx) => {
          return (
            <div key={idx}>
              <h3>{one.title}</h3>
              <p>Popularity: {Math.floor(one.social_rank)}/100</p>
              <br />
              <p>{one.source_url}</p>
            </div>
          )
        })
        }
      </div>
    )
  }
}

export default Play
