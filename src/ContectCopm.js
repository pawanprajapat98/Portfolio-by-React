import React from 'react'

function ContectCopm() {
  return (
    <div>
        <div className='form'>
            <form>
                <input className='Input-copy-1' placeholder='Full Name' type=''></input>
                <div className='tow-inp'>
                     <input id='Input-sm-left' className='Input-small' type='' placeholder='Email' ></input> 
                     <input className='Input-small' type='' placeholder='Contect' ></input>
                </div>
                <input className='Input-copy-1' type='' placeholder='Subject' ></input>
                <textarea id='Input-msg' type='' placeholder='Message' ></textarea>
                <div className='btn-submit'>
                      <button>SUBMIT</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContectCopm
