import {React,useState,useContext,useEffect} from 'react'
import { createContext} from 'react';

const MlDataContext=createContext(null)

export const useMlData = () => {
    return useContext(MlDataContext);

}

export const MlDataProvider=(props)=>{

    const [classData,setClassData]=useState(null)
    const [isLoading, setIsLoading] = useState(false);

    return (
        <MlDataContext.Provider value={{classData,setClassData,isLoading,setIsLoading}}>
            {props.children}
        </MlDataContext.Provider>
    )
}