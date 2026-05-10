import { createContext, useState} from 'react'

//create  context provider object
export const counterContextObj=createContext()


function ContextProvider({children}) {
    //state
    const [counter,setCounter]=useState(12)
    const [counter1,setCounter1]=useState(21)
    //function to change state
    const changeContext=()=>{
        setCounter(counter+1)
    }

    const changeContext1=()=>{
        setCounter1(counter1+1)
    }

  return (
    <counterContextObj.Provider value={{counter,counter1,changeContext,changeContext1}}>
        {children}
    </counterContextObj.Provider>
  )
}

export default ContextProvider