// import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
function BookList() {
  return (
    <section className='booklist'>
      <Book></Book>
    </section>
  )
}
const Book = () => {
  const image = 'https://images-na.ssl-images-amazon.com/images/I/81EIpnVY3dL._AC_UL127_SR127,127_.jpg'
  const title = 'Nana Loves You More'
  const author = 'Jimmy Fallon'
  return (
    <article className='book'>
        <img src={image} alt="image"/>
      <p style={{color: 'grey', fontWeight: '700'}}>{title}</p>
      <h1>{author.toUpperCase()}</h1>
    </article>
  )
}



ReactDom.render(<BookList></BookList>, document.getElementById('root'))