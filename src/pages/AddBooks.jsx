import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBook } from '../store/slice/book.slice';
import { CATEGORIES } from '../utils/enum/book.enum';
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {
    // all state
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState("");

    // router
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleAddBooks = (e) => {
        e.preventDefault()
        if (!title || !author || !category || !description) {
            alert("Please enter all the field.");
            return;
        }

        dispatch(addBook({ title, image: imageUrl, category, author, rating, description }));

        setTitle("")
        setCategory("")
        setImageUrl("")
        setAuthor("")
        setRating(0)
        setDescription("")
        navigate("/browse");
    }

    return (
        <div className=''>
            <h2 className=' text-4xl font-bold text-indigo-700 text-center py-16 px-4'>Add books to our collections</h2>
            <form className='bg-indigo-100 flex flex-col gap-8 justify-between w-1/2 rounded-2xl overflow-hidden m-auto px-20 py-12'>
                <span className='flex flex-col gap-3 font-semibold'>
                    <label htmlFor="title" className='text-lg text-gray-800 cursor-pointer'>Title</label>
                    <input type="text" id="title" placeholder='Enter book title' className='px-4 py-4 shadow-md shdow rounded-2xl inset-shadow-sm inset-shadow-indigo-500/50 focus-within:outline-2 focus-within:outline-indigo-500' value={title} onChange={(e) => setTitle(e.target.value)} />
                </span>

                <span className='flex flex-col gap-3 font-semibold'>
                    <label htmlFor="category" className='text-lg text-gray-800 cursor-pointer'>Category</label>

                    <select name="category" id="category" className='px-4 py-4 shadow-md shdow rounded-2xl inset-shadow-sm inset-shadow-indigo-500/50 focus-within:outline-2 focus-within:outline-indigo-500' value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="" disabled>Select a category</option>
                        {Object.values(CATEGORIES).map((cat) => (
                            <option key={cat} value={cat} className='text-gray-700'>{cat}</option>
                        ))}
                    </select>
                </span>

                <span className='flex flex-col gap-3 font-semibold'>
                    <label htmlFor="imageUrl" className='text-lg text-gray-800 cursor-pointer'>Book Image Url</label>
                    <input type="text" id="imageUrl" placeholder='Enter book category' className='px-4 py-4 shadow-md shdow rounded-2xl inset-shadow-sm inset-shadow-indigo-500/50 focus-within:outline-2 focus-within:outline-indigo-500' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </span>

                <span className='flex flex-col gap-3 font-semibold'>
                    <label htmlFor="author" className='text-lg text-gray-800 cursor-pointer'>Author</label>
                    <input type="text" id="author" placeholder='Enter book author' className='px-4 py-4 shadow-md shdow rounded-2xl inset-shadow-sm inset-shadow-indigo-500/50 focus-within:outline-2 focus-within:outline-indigo-500' value={author} onChange={(e) => setAuthor(e.target.value)} />
                </span>

                <span className='flex flex-col gap-3 font-semibold'>
                    <label htmlFor="rating" className='text-lg text-gray-800 cursor-pointer'>Rating</label>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(num => (
                            <svg
                                key={num}
                                onClick={() => setRating(num)}
                                className={`cursor-pointer transition-all duration-300 w-6 h-6 ${rating >= num ? 'text-yellow-400' : 'text-gray-300'
                                    }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                    </div>
                </span>

                <span className='flex flex-col gap-3 font-semibold'>
                    <label htmlFor="description" className='text-lg text-gray-800 cursor-pointer'>Description</label>
                    <textarea type="text" id="description" placeholder='Enter book description' className='px-4 py-4 shadow-md shdow rounded-2xl inset-shadow-sm inset-shadow-indigo-500/50 focus-within:outline-2 focus-within:outline-indigo-500' value={description} onChange={(e) => setDescription(e.target.value)} />
                </span>
                <button
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 cursor-pointer  text-gray-200 rounded-2xl ring-2 ring-violet-500/50 shadow-2xl hover:scale-105 transition-all ease-in-out duration-300"
                    onClick={handleAddBooks}
                    onKeyDown={handleAddBooks}
                >Add Book</button>
            </form>
        </div>
    )
}

export default AddBooks