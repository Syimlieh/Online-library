import React from 'react'
import Category from '../components/Category'
import Booklist from '../components/Booklist'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BookSearch from '../components/BookSearch'

const Books = () => {
    const { category } = useParams();
    let { value, searchTerm } = useSelector(state => state.books);
    if (category) {
        value = value.filter((item) => item.category.toLowerCase() === category);
    }

    if (searchTerm) {
        value = value.filter((item) => {
            return (
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.author.toLowerCase().includes(searchTerm.toLowerCase())
            )
        })
    }

    return (
        <div className='px-40 relative'>
            <div className='absolute top-8 right-8'>
                <BookSearch />
            </div>
            <Category />
            <Booklist data={value} />
        </div>
    )
}

export default Books;