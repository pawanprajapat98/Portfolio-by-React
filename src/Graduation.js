import React, { useState } from 'react'
import { Link,Outlet } from 'react-router-dom'

function Graduation() {
 

  return (
    <div>
      <div className='ul-list'>
        <ul>
          <li><Link className='btn-1' to='/Graduation'>EDUCATION</Link></li>
          <li ><Link className='btn-2' to='/Graduation/Inturnship'>INTERNSHIP</Link></li>
          </ul>
        </div>
       <Outlet/>
    </div>
  )
}

export default Graduation
