import React, { useContext} from 'react'
import { countcontext } from '../Context'

const count = () => {
    const {count}=useContext(countcontext)
    const colour=count%2===0?'blue':'red'
  return (
    <p>count is <p style={{color:colour}}>{count} </p></p>
  )
}

export default count