import React, { useEffect, useState } from 'react'
import DragDrop from '../Components/DragDrop'
import LobbyScreen from './Lobby'

import { useFirebase } from '../ContextProvider/FireBaseProvider'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

function HomaPage() {

    const [active, setActive] = useState(false)
    const firebase = useFirebase()

    useEffect(() => {
        if (firebase.isloggedIn) {
            setActive(!active)
        }
        else {
            setActive(false)
        }
    }, [firebase.isloggedIn])

    console.log(active);

    if (active) {
        return (
            <div className='mt-36'>
                <NavBar/>
                <div className='flex'>
                    <div className='w-1/2 p-9'>
                        <h1 className='text-5xl font-bold font-mono'><span className='text-green-600'>Plant</span> Disease
                            <br />
                            <span className='text-red-600'>Detection</span> & Monitoring</h1>
                        <p className='mt-10 font-semibold text-xl'>Just drag and drop image of leaves to detect plant disease</p>
                        <button className=' mt-8 w-36 h-10 px-2 py-1 bg-slate-700 rounded-md text-white'>Get Started</button>
                    </div>
                    <div className='w-1/2'>
                        <DragDrop />
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
    else{
        return <LobbyScreen/>
    }




}

export default HomaPage
