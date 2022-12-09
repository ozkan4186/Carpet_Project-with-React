import React from 'react'
import { createContext ,useState,useEffect} from 'react'
// import { userObserver } from '../auth/Firebase';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const initialValues = {
  email: "",
  displayName: "özkan",
  password: "",
};
  const [currentUser, setCurrentUser] = useState(initialValues);

//   useEffect(() => {
    // 
//   userObserver(setCurrentUser)
//   
//   }, [])
//   
const values={currentUser,setCurrentUser}
  return(
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
};


export default AuthContextProvider;