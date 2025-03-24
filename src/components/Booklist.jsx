import React from 'react'
import BookItem from './BookItem';

const Booklist = ({ data }) => {
    return (
        <div className='flex gap-8'>{
            data && data.map((item) => (
                <BookItem
                    key={item.id}
                    title={item.title}
                    author={item.author}
                    category={item.category}
                    image={item.image}
                    description={item.description}
                />
            ))
        }</div>
    )
}

export default Booklist;