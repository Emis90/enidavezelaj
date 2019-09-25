import React from 'react'
import {key} from './secrets'
import {Link} from 'react-router-dom'
import results from '../data/places'
import places from '../data/places';


const Map = () => {
  console.log(places.venues)
  return (
  <div>
  <h3>HEre some places i like to go to</h3>
  {places.venues.map((place) => {
    return (<p>{place.name} lat: {place.location.lat} lng: {place.location.lng}</p>)
  })}
  <div>

  </div>

  <div className="button">
      <Link to='/'>Home</Link>

  </div>
</div>
  )
}

export default Map
