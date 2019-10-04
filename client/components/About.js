import React from 'react'
import {Link} from 'react-router-dom'
const About = () => {
  return(
    <div className='about'>
      <div id="description">
      <h2>About me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo tortor, congue ullamcorper posuere in, posuere non ex. Praesent quis metus et lorem gravida porttitor. Sed sed leo consectetur, sollicitudin eros eget, vulputate eros. Aliquam elementum laoreet neque vulputate placerat. Duis pulvinar aliquam ligula imperdiet molestie. Sed ultricies tincidunt lectus, lobortis euismod lorem iaculis in. Nullam diam sapien, interdum eu libero sed, lacinia semper eros. Suspendisse arcu lectus, pulvinar in hendrerit tristique, scelerisque sed augue. Pellentesque semper placerat enim, at venenatis elit. Cras metus velit, convallis ac ultricies a, bibendum ut orci. Cras aliquet lobortis nisl quis sollicitudin. Nam gravida congue nisi ac mollis. Integer facilisis, quam sit amet imperdiet dapibus, lorem ante semper tortor, eget aliquam velit quam at ex. Ut convallis metus orci, quis commodo nisl suscipit vitae.</p>
      </div>
      {/* <div className="button">
      <Link className='linkhome' to='/'>Home</Link>
    </div> */}
      </div>
  )
}
export default About
