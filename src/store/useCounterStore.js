import {create} from 'zustand'

//create store
//create function will return a hook 
export const useCounterStore=create((set)=>({    //set function will return an object
    //state
    newCounter:0,
    newCounter1:10,
    //user state (name,age email)
    user:{name:"soujith",email:"soujith@mail.com,age:19"},
    //function to change email
    changeEmail:()=>set({...user,email:"sss@mail.com"}),
    //function to change name and age
    changeDetails:()=>set({...user,name:"sunny",age:20}),
    //functions to modify state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    incrementCounter1:()=>set(state=>({newCounter:state.newCounter1+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0}),
    //function to change newCounter to 500
    changeCounter:()=>set({newCounter:500}),

    //function to decrement newCOunter1 by 20
    changeCounter1:()=>set(state=>({newCounter:state.newCounter-20}))

}))