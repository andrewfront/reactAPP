
    const Book = (props) => {
        const {image, title, author} = props
        const clickHandler = () => {
          alert('heelo world')
        }
        const complexExample = (author) => {
          console.log(author);
        }
        return (
          <article className='book' onMouseOver={() => {
            // console.log(title)
          }}>
              <img src={image} alt="image"/>
            <p style={{color: 'grey', fontWeight: '700'}}>{title}</p>
            <h1>{author.toUpperCase()}</h1>
            <button type='button' onClick={clickHandler}>Click Me</button>
            <button type='button' onClick={() => complexExample(author)}>More Complex Example</button>
          </article>
        )
      }


export default Book