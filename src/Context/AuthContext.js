import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
import { auth } from "../firebase"
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
            console.log(user)
        })
    },[])


    
} 