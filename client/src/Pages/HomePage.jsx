import React, { useState } from 'react'
import DragDrop from '../Components/DragDrop'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import coverImage from '../assets/Images/coverImage.jpeg'
import StepsInfo from '../Components/StepsInfo'
import { useMlData } from '../ContextProvider/MlDataProvider.jsx';

function HomePage() {

    const mlData = useMlData();
    const [fileName, setFileName] = useState('');

    return (
        <div>

            <NavBar />
            <div className='mt-28'>
                <div className='flex'>
                    <div className='w-1/2 p-9'>
                        <h1 className='text-5xl font-bold font-mono'><span className='text-green-600'>Plant</span> Disease
                            <br />
                            <span className='text-red-600'>Detection</span> & Monitoring</h1>
                        <p className='mt-10 font-semibold text-xl'>Harness the power of ML to monitor and detect plant diseases. Simply upload an image of the plant leaf and let our system do the rest.</p>
                        <button
                            className=' mt-8 w-36 h-10 px-2 py-1 bg-slate-700 rounded-md text-white'>Get Started</button>
                    </div>
                    <div className='w-1/2 flex justify-center'>
                        <img className='h-5/6 rounded-lg' src={coverImage} />
                    </div>
                </div>
                <StepsInfo />
                <div className='mt-10 flex '>
                    <div className='w-1/2'>
                        <DragDrop />

                    </div>
                    <div className='w-1/2'>
                        {mlData.isLoading ? (<div className='flex justify-center items-center delay-1000'>
                            <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500'></div>
                            <p className='text-lg font-semibold ml-3'>Processing the image...</p>
                        </div>) : (mlData.classData && <div className='mt-10'>
                            <h1 className='text-2xl font-semibold'>
                                The uploaded image is classified as: {mlData.classData.class}
                            </h1>
                        </div>)
                        }


                    </div>

                </div>
                <Footer />
            </div>
        </div>
    )
}

export default HomePage
