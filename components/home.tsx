import React,{useState,useReducer} from 'react'

import {Props} from './Home.type'
import Login from './login'
type stateTypes = {
  name: string,
}
type AuthUser = {
  name: string,
  email: string
}
const HomePage = (props: Props) => {
  const { count = 0 } = props;//it says if count is there use else use 0
  const [userDetails, setUserDetails] =
    useState<stateTypes | null>(null);
  const [obj, setObj] = useState<AuthUser>({} as AuthUser)///type assertion for the values which will asign as soon as render and will never be null in future
  type counterAction = updateAction | ResetAction
  //for the two possible types 
  type updateAction = {
    type: "INCREMENT" | "DECREMENT" ,
    payload:number
}
  type ResetAction = {
    type: "RESET" ,

}
const initialState ={count:0}
const reducer= (state:{count:number}, action:counterAction) => {
  switch (action.type) {
    case "INCREMENT":
      return ({ count: state.count + action.payload  })
     case "DECREMENT" :
      return ({ count: state.count - 1 })
     case "RESET" :
      return initialState
    default:
      return state;
  
  }
}
const [state,disptach] = useReducer(reducer,initialState);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails({name:event.target.value})
  }

  return (
    <div >Hi {props.name}. How are you man!
      And you`r status is {props.status}<br />
      <button onClick={(event) => { props.handleClick(event, 3) }} style={props.style}>click me</button> <br />
      <input type="text" onChange={(event) => { handleOnChange(event) }} />
      <br /> typing {userDetails?.name}
      <br /> Count {state?.count}
      <br/> <button onClick={()=>{disptach({type:"DECREMENT",payload:1})}}>increment</button>
      <br/> <button onClick={()=>{disptach({type:"RESET"})}}>RESET</button>
      <br />
      {obj.name}
      {/* //because of type assertion we don't have to use ? */}
      <Login/>
      </div>
  )
}

export default HomePage