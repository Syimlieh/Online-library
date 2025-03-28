import React from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES } from '../utils/enum/book.enum';

const Category = () => {
    return (
        <div className='w-4/5 mx-auto my-8'>
            <h2 className='text-center text-3xl text-violet-600 font-bold'>Categories</h2>
            <ul className='flex gap-12 justify-center mt-4'>
                <li className='text-xl font-semibold cursor-pointer hover:text-indigo-500'>
                    <Link to={`/category/${CATEGORIES.FICTION.toLowerCase()}`}>Fiction</Link>
                </li>
                <li className='text-xl font-semibold cursor-pointer hover:text-indigo-500'>
                    <Link to={`/category/${CATEGORIES.NON_FICTION.toLowerCase()}`}>Non-Fiction</Link>
                </li>
                <li className='text-xl font-semibold cursor-pointer hover:text-indigo-500'>
                    <Link to={`/category/${CATEGORIES.SCI_FI.toLowerCase()}`}>Sci-Fi</Link>
                </li>
            </ul>
        </div>
    )
}

export default Category