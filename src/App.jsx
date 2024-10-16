// import {Routes,Route} from 'react-router-dom'
// import Home from './component/Home'

import Count from "./component/count"
import Decrement from "./component/Decrement"
import Increment from "./component/Increment"
import Context from "./Context"

function App() {
  

  return (
    <div>
      <Context>
      <Count />
      <Decrement />
      <Increment />
      </Context>
    </div>
  )
}

export default App
