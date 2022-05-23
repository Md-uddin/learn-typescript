
import { createContext,useState } from 'react';
export type AuthUser = {
  name: string;
  email:string
}
type userContextProviderProps = {
  children:React.ReactNode
}
type UserContextType = {
  user: AuthUser | null;
  setUser:React.Dispatch<React.SetStateAction<AuthUser | null>>
}
//simple method
// export const UserContext = createContext<UserContextType | null>(null);
//with type assertion
export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({children}:userContextProviderProps) => {
  
const [user, setUser] = useState<AuthUser | null >(null)
  return <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
}