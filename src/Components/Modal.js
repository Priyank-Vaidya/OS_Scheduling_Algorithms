import React from 'react'
 import { Chatppt } from '../chatbot/Chatppt'
function Modal({closeModal}) {
  return (
    <>
    <div className='modalBackground bg-white text-black'>

    <div className='modalContainer'>
        <button onClick={()=>closeModal(false)}>X</button>
            <Chatppt/>
    <div className='footer'>

        <button onClick={()=>closeModal(false)}>Canel</button>
        <button>Continue</button>
    </div>
    </div>


    </div>
      


    </>
  )
}

export default Modal