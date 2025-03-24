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

        dispatch(addBook({ title, image: imageUrl, category, author, description }));

        setTitle("")
        setCategory("")
        setImageUrl("")
        setAuthor("")
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