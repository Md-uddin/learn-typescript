import React from 'react'
import Login from './login'


const CustomComp = (props: React.ComponentProps<typeof Login>) => {//to get the types from other comp you don't have access
  return (
    <div>CustomComp {props.username}</div>
  )
}

export default CustomComp