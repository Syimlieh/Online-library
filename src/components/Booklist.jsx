import React from 'react'
import BookItem from './BookItem';
import { Link } from 'react-router-dom';

const Booklist = ({ data }) => {
    return (
        <div className='flex gap-8 max-w-6xl m-auto'>{
            data && data.map((item) => (
                <Link to={`/book/${item.id}`} key={item.id}>
                    <BookItem
                        key={item.id}
                        title={item.title}
                        author={item.author}
                        category={item.category}
                        image={item.image}
                        description={item.description}
                    />
                </Link>
            ))
        }</div>
    )
}

export default Booklist;