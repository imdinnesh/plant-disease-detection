import React from 'react';
import { useNavigate } from 'react-router-dom';
const LobbyScreen = () => {

    const navigate=useNavigate()
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Welcome to Our App</h2>
                <p className="text-lg text-gray-700 mb-8 text-center">
                    Please login to continue and access all features.
                </p>
                <div className="flex justify-center">
                    <button
                        className="py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                        onClick={() =>navigate('/login')}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LobbyScreen;