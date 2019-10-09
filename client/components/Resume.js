import React from 'react'
import { Document } from 'react-pdf'


class Resume extends React.Component{
  // resume = async() => {
  //   let result = await import('../../public/images/EnidaVezelajResume.pdf')
  //   return result
  // }
  render(){
  return(
    <div className='resume'>
      <iframe
      src='/images/EnidaVezelajResume.pdf'
        width='750'
        height='950'
      />
    </div>
  )
  }
}
export default Resume
