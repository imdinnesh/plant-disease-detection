import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useMlData } from '../ContextProvider/MlDataProvider.jsx';


const DragDrop = () => {
    const [file, setFile] = useState(null);
    const [dragOver, setDragOver] = useState(false);
    const [data, setData] = useState(null);

    const mlData=useMlData()


    const handleDragEnter = (e) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        const newFile = e.dataTransfer.files[0];
        setFile(newFile);
    };

    const handleFileSelect = (e) => {
        setFile(e.target.files[0]);
    };

    const handleRemoveImage = () => {
        setFile(null);
        mlData.setClassData(null)
    };

    const sendFile = async () => {
        
        if (file) {
            mlData.setIsLoading(true)
            let formData = new FormData();
            formData.append("file", file);
            let res = await axios({
                method: "post",
                url: process.env.REACT_APP_API_URL,
                data: formData,
            });
            if (res.status === 200) {
                //alert(`class:${res.data.class} confidence:${res.data.confidence}`)
                setData(res.data);
                mlData.setClassData(res.data)
                mlData.setIsLoading(false)
            }
        }
    }

    // useEffect(() => {
    //     if (file) {
    //         sendFile()
    //     }
    // }, [file])





    return (
        <div className='flex flex-col space-y-4 items-center'>
            <div
                className={`w-2/3 h-96 rounded-lg border-2 border-dashed flex items-center justify-center ${dragOver ? 'border-blue-500' : 'border-gray-300'
                    }`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
            >
                {file ? (
                    <div className="flex flex-col items-center">
                        <img
                            src={URL.createObjectURL(file)}
                            alt="Uploaded"
                            className="w-72 h-64 object-cover rounded-md"
                        />
                        <div className="mt-4 flex items-center">
                            <p className="text-gray-600 mr-4">{file.name}</p>
                            <button
                                className="text-red-500 hover:text-red-700"
                                onClick={handleRemoveImage}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <svg
                            className="w-12 h-12 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                            />
                        </svg>
                        <p className="mt-2 text-gray-600">
                            Drag and drop an image or{' '}
                            <label
                                htmlFor="file-input"
                                className="text-blue-500 hover:text-blue-700 cursor-pointer"
                            >
                                browse
                            </label>
                        </p>
                        <input
                            id="file-input"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileSelect}
                        />
                    </div>
                )}
            </div>

            <button
                onClick={sendFile}
                className='w-40 h-16 px-4 py-2 rounded-md bg-black text-white'>Predict</button>
        </div>
    );
};

export default DragDrop;