import React from 'react'
// import SideNavbar from './SideNavbar'
// import phonto/anyname from './path' 
import { Link } from 'react-router-dom'
function Home() {
  return (
  <>
  <div className='main-box'>
   
  
    <div className='container'>
          <div className='pic'>
                <img src='./img.jpeg' alt=''/>
                {/* <img src={phonto/anyname}></img> */}
          </div>
          <div className='Detail'>
                <h1>Pawan Prajapat</h1>
                <p className='web'>Frontend Developer</p>
                <a className='Resume' href='./resume.pdf'>RESUME</a>
                <Link className='Hire' type="" to='/Contect'>HIRE ME</Link>
          </div>
      </div>
    </div> 
  </>
  )
}

export default Home
