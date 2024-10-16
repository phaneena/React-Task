import React, { useContext } from 'react'
import { countcontext } from '../Context'

const Increment = () => {
    const {handleincrement}=useContext(countcontext)
  return (
    <button onClick={handleincrement} style={{width:'100px',height:'20px'}}>add</button>
  )
}

export default Increment