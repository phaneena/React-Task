import React, { createContext, useState } from 'react'

export const countcontext=createContext()
const Context = ({children}) => {
    const[count,setCount]=useState(0)
    
    const handleincrement=()=>{
        setCount((count)=>count+1)
    }
    const handledecrement=()=>{
        setCount((count)=>count-1)
    }
  return (
    <countcontext.Provider value={{count,handleincrement,handledecrement}}>
        {children}
    </countcontext.Provider>
  )
}

export default Context