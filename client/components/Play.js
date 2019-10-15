import React from 'react';


class Play extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nodes: []
    }
  }

  componentDidMount() {
    const nodes = [];
    for (let row = 0; row < 15; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push([])
      }
      nodes.push(currentRow)
    }

    this.setState({nodes})
  }


  render() {
    const {nodes} = this.state
  return(
  <div className='grid'>
   {
     nodes.map((row, rowIdx) => {
       return <div key={rowIdx}>
       {row.map((node, nodeIdx) => <div key={nodeIdx}></div>)}
       </div>
     })
   }
  </div>
)}

}

export default Play
