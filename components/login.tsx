import React,{useRef,useEffect,useState} from 'react'
import { useContext } from 'react'
import {UserContext} from './useContext'
type Props = {
username?: string
}

const Login = (props: Props) => {
  const userContext = useContext(UserContext);
  const inputRef = useRef<HTMLInputElement>(null!);
  const [timer, setTimer] = useState<number>(0);
  const interValRef = useRef<number | null >(null);
  
  useEffect(() => {
    inputRef.current.focus()
    console.log(inputRef)
  }, [])
  const stopTimer = () => {
    if (interValRef.current) {
      
      window.clearInterval(interValRef.current)
    }
  }
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer)=> timer + 1)
    }, 1000)
    return () => {
      stopTimer()
    }
  },[])

  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: 'md',
        email:'md@gmail.com',
      })
      
    }
  }
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null)
    }
  }
  return (
    <div>
<button onClick={()=>handleLogin()}>Login</button> 
      <button onClick={()=>handleLogout()}>logout</button>
      user name is {userContext?.user?.name}
      <input type='text' ref={inputRef} />
    </div>
  )
}
export default Login