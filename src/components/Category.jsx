import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <div className='w-4/5 mx-auto my-8'>
            <h2 className='text-center text-3xl text-violet-600 font-bold'>Categories</h2>
            <ul className='flex gap-8 justify-center mt-4'>
                <li className='text-xl font-semibold cursor-pointer'>
                    <Link to="/category">Fiction</Link>
                </li>
                <li className='text-xl font-semibold cursor-pointer'>
                    <Link to="/category">Non-Fiction</Link>
                </li>
                <li className='text-xl font-semibold cursor-pointer'>
                    <Link to="/category">Sci-Fi</Link>
                </li>
            </ul>
        </div>
    )
}

export default Category