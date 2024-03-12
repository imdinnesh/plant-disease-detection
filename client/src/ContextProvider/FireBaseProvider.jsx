import {React,useState,useContext,useEffect} from 'react'
import { createContext} from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const firebaseConfig = {
    apiKey: "AIzaSyA0WhMsxoZBbJs8zICb7E56jW_lTiJbmLw",
    authDomain: "plant-disease-866e0.firebaseapp.com",
    projectId: "plant-disease-866e0",
    storageBucket: "plant-disease-866e0.appspot.com",
    messagingSenderId: "563298669094",
    appId: "1:563298669094:web:bb063c2caade95f37e8ce7"
};

const FireBaseContext=createContext(null)
const fireBaseApp = initializeApp(firebaseConfig);
const fireBaseAuth = getAuth(fireBaseApp);


export const useFirebase = () => {
    return useContext(FireBaseContext);

}

export const FireBaseProvider=(props)=>{


    const [isloggedIn, setIsLoggedIn] = useState(null);
    const [redirect,setRedirect]=useState(true)

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(fireBaseAuth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(fireBaseAuth, email, password)
    }

    const navigate=useNavigate();

    const logout = () => {
        signOut(fireBaseAuth).then(() => {
            console.log("Sign-out successful.")
        }).catch((error) => {
            console.log("Sign-out failed.", error)
        }).finally(navigate('/'))
    }

    useEffect(() => {
        onAuthStateChanged(fireBaseAuth, (user) => {
            if (user) {
                setIsLoggedIn(user);
                setRedirect(true)
                console.log("Registered succesfully", user.email);
            }
            else {
                setIsLoggedIn(null);
            }
        })
    }, [isloggedIn])
    
    

    return (
        <FireBaseContext.Provider value={{signIn,signUp,logout,isloggedIn,redirect,setRedirect}}>
            {props.children}
        </FireBaseContext.Provider>
    )
}







