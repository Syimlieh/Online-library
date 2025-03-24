import React from 'react'

const BookItem = ({ title, author, category, image, description }) => {
    return (
        <div className='w-60 min-h-[30rem] rounded-2xl shadow-lg overflow-hidden flex flex-col bg-white cursor-pointer hover:scale-105 transition-all ease-in-out duration-400'>
            <div className='w-full h-3/5'>
                <img src={image} alt={title} className='w-full h-full object-cover object-top' />
            </div>
            <div className='p-4 flex flex-col flex-grow gap-2'>
                <p className='font-light text-sm text-gray-700'>{author}</p>
                <h3 className='text-lg font-semibold text-gray-800'>{title}</h3>
                <p className='text-sm text-gray-700 line-clamp-2'>
                    {description}
                </p>
                <div className='mt-auto'>
                    <p className='text-sm text-gray-700'><b>Category:</b> {category}</p>
                </div>
            </div>
        </div>
    )
}

export default BookItem;