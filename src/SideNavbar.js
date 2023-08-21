import React from 'react'
import {  Link } from 'react-router-dom'

function SideNavbar() {
 
  return (
    <>
      <div className='Header' >
        <ul>
            <li> <Link to="/" ><i className="fa-solid fa-house"></i></Link></li>
            <li> <Link to="/about" ><i className="fa-regular fa-user"></i></Link></li>
            <li> <Link to="/Code" ><i className="fa-regular fa-file-code"></i></Link></li>
            <li> <Link to="/Bag" ><i className="fa-solid fa-briefcase"></i></Link></li>
            <li> <Link to="/Graduation" ><i className="fa-solid fa-user-graduate"></i></Link></li>
            <li> <Link to="/Portpoliyo" ><i className="fa-regular fa-clone"></i></Link></li>
            <li> <Link to="/Contect" ><i className="fa-regular fa-address-book"></i></Link></li>
        </ul>
      </div>
    </>
  )
}

export default SideNavbar
