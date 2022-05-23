import React from 'react'
import Login from './login'
type Props = Omit<React.ComponentProps<typeof Login>,"username" >& {
  name:"md" | "uddin"
}
const CustomComp = (props:Props ) => {//to get the types from other comp you don't have access
  return (
    <div>CustomComp {props.name}</div>
  )
}

export default CustomComp