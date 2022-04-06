// import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
const firstBook = {
  image: 'https://images-na.ssl-images-amazon.com/images/I/81EIpnVY3dL._AC_UL127_SR127,127_.jpg',
  title: 'Nana Loves You More',
  author: 'Jimmy Fallon',
}
const secondBook = {
  image: 'https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL254_SR254,254_.jpg',
  title: "It's Not Easy Being a Bunny",
  author: 'Marilyn Sadler',
}
const thirdBook = {
  image: 'https://images-na.ssl-images-amazon.com/images/I/71PmVNpXSUL._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL254_SR254,254_.jpg',
  title: "My Evil Mother: A Short Story",
  author: 'Margaret Atwood',
}
function BookList() {
  return (
    <section className='booklist'>
      <Book image={firstBook.image} title={firstBook.title} author={firstBook.author}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aspernatur, quaerat vitae illum sunt deleniti doloribus minus explicabo magni ullam dolores tenetur ipsa nobis expedita? Eius mollitia ut consectetur obcaecati.</p>
      </Book>
      <Book image={secondBook.image} title={secondBook.title} author={secondBook.author}></Book>
      <Book image={thirdBook.image} title={thirdBook.title} author={thirdBook.author}></Book>
    </section>
  )
}
const Book = (props) => {
  const {image, title, author, children} = props
  return (
    <article className='book'>
        <img src={image} alt="image"/>
      <p style={{color: 'grey', fontWeight: '700'}}>{title}</p>
      <h1>{author.toUpperCase()}</h1>
      {children}
    </article>
  )
}



ReactDom.render(<BookList></BookList>, document.getElementById('root'))