import React from 'react'
import PortfoliyoComp1 from './PortfoliyoComp1'
function Portpoliyo() {
  return (
    <div>
        <div className='Portfoliyo-cont'>
            <div className='portfolio-heading'>
              <h1>PORTFOLIO</h1>
            </div>
            <div className='port-cop-box'> 
              <PortfoliyoComp1/>
              <PortfoliyoComp1/>
              <PortfoliyoComp1/>
            </div> 
        </div>
    </div>
  )
}

export default Portpoliyo
