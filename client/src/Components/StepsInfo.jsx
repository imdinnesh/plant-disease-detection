import React from 'react';

function StepsInfo() {
    return (
        <div className='bg-gray-800 h-96 px-3 py-2 shadow-lg'>

            <h1 className='text-3xl font-semibold text-center mt-24 text-white'>
                How it works?
            </h1>
            <div className='flex justify-center mt-5 space-x-8'>
                <Step
                    title='Step 1'
                    description='Upload image of leaves'
                />
                <Arrow />
                <Step
                    title='Step 2'
                    description='Click on predict button'
                />
                <Arrow />
                <Step
                    title='Step 3'
                    description='Get result of disease detection'
                />
            </div>
        </div>
    );
}

function Step({ title, description }) {
    return (
        <div className='w-1/4 h-20 border-2 border-white p-2 rounded-lg shadow-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-200'>
            <h1 className='text-2xl font-semibold text-center text-white'>
                {title}
            </h1>
            <p className='text-center text-white'>
                {description}
            </p>
        </div>
    );
}

function Arrow() {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </div>
    );
}

export default StepsInfo;