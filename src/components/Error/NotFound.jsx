import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='max-w-6xl mx-auto p-8 bg-white shadow-xl rounded-xl flex flex-col items-center gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-5xl text-red-600 font-bold text-center'>404: Page Not Found</h1>
            <p className='text-lg text-gray-600 text-center mb-6'>The page you are looking for does not exist. Please check the URL or go back to the homepage.</p>
            <Link to="/">
                <button className='px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300 cursor-pointer'>
                    Go to Home
                </button>
            </Link>
        </div>
    )
}

export default NotFound;