import React from 'react'
import { IoArrowBackSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';

const BookDetails = () => {
    const { id } = useParams();
    const data = useSelector(state => state.books.value);
    const book = data.find(book => book.id === Number(id))
    console.log('book', book)
    return (
        <div className='relative'>
            <Link to="/browse" >
                <IoArrowBackSharp className='text-3xl absolute top-0 left-12 cursor-pointer' />
            </Link>

            <div className="max-w-6xl mx-auto mt-16 p-8 bg-white shadow-lg rounded-xl flex gap-12 relative">
                {/* Book Cover */}
                <div className="w-1/3">
                    <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-[400px] object-cover object-top rounded-lg shadow-md"
                    />
                </div>

                {/* Book Info */}
                <div className="w-2/3">
                    <h2 className="text-4xl font-bold text-gray-800">{book.title}</h2>
                    <div class="flex items-center mt-1">
                        {
                            book && Array.from({ length: book.rating }).map((_, index) => ( // static so index is fine
                                <svg class="w-3 h-3 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20" key={index}>
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            ))
                        }
                    </div>


                    <p className="text-gray-600 text-lg mt-2">
                        <span className="font-semibold">Category:</span> {book.category}
                    </p>

                    <p className="text-gray-600 text-lg mt-2">
                        <span className="font-semibold">Author:</span> {book.author}
                    </p>

                    <p className="text-md text-gray-700 mt-6 leading-relaxed">
                        {book.description}
                    </p>
                    <Link to="/browse" >
                        <button className="mt-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                            Back to browse
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BookDetails