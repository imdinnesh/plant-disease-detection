import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import '../App.css'
import { useFirebase } from '../ContextProvider/FireBaseProvider';

function SignInPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const firebase = useFirebase();

    const navigate = useNavigate();

    const handleSignIn = async(e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to server
        await firebase.signIn(email, password);

    };

    useEffect(()=>{
        if(firebase.isloggedIn){
            navigate('/home');
        }
    },[firebase,firebase.isloggedIn])



    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                    Sign In
                </h2>
                <form onSubmit={handleSignIn}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-md font-semibold transition-colors hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Sign In
                    </button>
                    <p className='mt-6'>Dont have acoount <span className='font-bold'><button className='text-blue-600' onClick={()=>{navigate('/register')}}>Register Now</button></span></p>
                </form>

            </div>

        </div>
    );
}

export default SignInPage
