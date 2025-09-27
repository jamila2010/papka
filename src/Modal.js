import { useState } from 'react'
import './Modal.css'

const Modal=()=>{
    const [showContent , setContent]=useState(true)
    return(
        <div className='modal'>
            <button onClick={()=>{
               return  showContent(false)
            }}><i class="fa-solid fa-xmark"></i></button>
             <h3>Modal modal modal  </h3>
             <img src='https://i.pinimg.com/736x/50/36/67/503667c181f35b80adf1e15404b6b8d5.jpg' />
             
        </div>
    )
}
export default Modal