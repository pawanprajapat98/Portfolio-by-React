import React from 'react'
import Graduation from './Graduation'
import InturnshipComp from './InturnshipComp'
function Inturnship() {
  return (
    <div>
        <Graduation/>
        <div className='Educat-cont'>
              <div className='Educat-box'>
                   <div className='Date-box'>
                        <p>NOV,2022 - PRESENT</p>
                   </div>
                   <div className='Detail-box'>
                      <h1>NEWTON SCHOOL</h1>
                      <h2>Fullstack Web development</h2>
                      <ul>
                          <li>-Fullstack development using react and node js</li>
                        

                      </ul>
                   </div>
              </div>
          </div>
          <InturnshipComp/>
    </div>
  )
}

export default Inturnship
