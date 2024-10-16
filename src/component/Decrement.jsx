import React, { useContext } from 'react'
import { countcontext } from '../Context'

const Decrement = () => {
    const {handledecrement}=useContext(countcontext)
  return (
    <button onClick={handledecrement} style={{width:'100px',height:'20px'}}>sub</button>
  )
}

export default Decrement