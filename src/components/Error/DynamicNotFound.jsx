import React from 'react'
import { useNavigate } from 'react-router-dom'

const DynamicNotFound = ({ item }) => {
    const navigate = useNavigate()
    return (
        <div className='max-w-6xl mx-auto mt-16 p-8 bg-white shadow-xl rounded-xl flex flex-col items-center gap-6'>
            <h1 className='text-4xl text-red-600 font-bold'>Error</h1>
            <p>Item not found: <span className="font-semibold">{item}</span></p>
            <button
                onClick={() => navigate('/browse')}
                className='px-6 py-3 bg-indigo-600 text-white rounded-xl cursor-pointer'>
                Go to Books List
            </button>
        </div>
    )
}

export default DynamicNotFound