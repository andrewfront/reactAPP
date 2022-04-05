// import React from 'react';
import ReactDom from 'react-dom';
function Greeting() {
  return (
    <div>
      <Person></Person>
      <Message></Message>
    </div>
  )
}
// const Greeting =() => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'Hello'))
// }
const Person = () => <h2>Peter Watson</h2>
const Message = () => {return <p>this is my message</p>}
ReactDom.render(<Greeting></Greeting>, document.getElementById('root'))