import React from 'react'
import Category from '../components/Category'
import Booklist from '../components/Booklist'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Books = () => {
    const { category } = useParams();
    let data = useSelector(state => state.books.value);
    if (category) {
        data = data.filter((item) => item.category.toLowerCase() === category);
    }

    return (
        <div className='px-40'>
            <Category />
            <Booklist data={data} />
        </div>
    )
}

export default Books