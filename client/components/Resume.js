import React from 'react'


class Resume extends React.PureComponent{

  render(){
  return(
    <div className='resume'>
      <iframe
      src='/images/enidaresume.pdf' height="100%" width="100%" frameBorder="1"
      allowFullScreen
      />
    </div>
  )
  }
}
export default Resume
