// import React from 'react';
import ReactDom from 'react-dom';
import { data } from './books';
import Book from './book';
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      {data.map((book) => {
        return (
          <Book key={book.id} {...book}></Book>
        )
      })}
    </section>
  )
}



ReactDom.render(<BookList></BookList>, document.getElementById('root'))