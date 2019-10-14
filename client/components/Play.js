import React from 'react';


class Play extends React.Component {
  constructor() {
    super()
  }

  render() {
  return(
  <div className='grid'>
  <p>This is the play page</p>

  {
   [0, 1, 2, 3, 4, 5, 6].map((ele, i) => {
     return(<div className='i' key={i}>{
       [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 7, 8, 9, 20, 21, 22, 23, 24].map((ele, j) => {return(<div className='j' key={j}></div>)})
     }</div>)
     })
  }
  </div>
)}

}

export default Play
