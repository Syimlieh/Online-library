import React from 'react'
import Category from '../components/Category'
import Booklist from '../components/Booklist'
import { useSelector } from 'react-redux'

const Books = () => {
    const data = useSelector(state => state.books.value);
    return (
        <div className='px-40'>
            <Category />
            <Booklist data={data} />
        </div>
    )
}

export default Books