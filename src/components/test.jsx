import { useContext } from "react"
import { counterContextObj } from "../contexts/ContextProvider"

function test() {
    const {counter1,changeContext1}=useContext(counterContextObj)
  return (
    <div>
        <h1>Counter1:{counter1}</h1>
        <button >+</button>
    </div>
  )
}

export default test