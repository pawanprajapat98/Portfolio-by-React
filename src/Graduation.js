import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Graduation() {
  // const [isActive, setIsActive] = useState(false);
     const [isActive,setIsActive]=useState(false)
  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  return (
    <div>
      <div className='ul-list'>
        <ul>
          <li><Link to='/Educat'>EDUCATION</Link></li>
          <li className={isActive ? 'active' : ''} onClick={handleClick}><Link to='/Inturnship'>INTERNSHIP</Link></li>
          </ul>
        </div>
       
    </div>
  )
}

export default Graduation
