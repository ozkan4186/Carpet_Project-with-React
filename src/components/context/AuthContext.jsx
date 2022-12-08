import React from 'react'
import { createContext ,useState,useEffect} from 'react'
// import { userObserver } from '../auth/Firebase';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState("");

//   useEffect(() => {
    // 
//   userObserver(setCurrentUser)
//   
//   }, [])
//   

  return(
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  )
};


export default AuthContextProvider;