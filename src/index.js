import ReactDom from 'react-dom';
function Greeting() {
  return <h4>Hello World</h4>
}
ReactDom.render(<Greeting></Greeting>, document.getElementById('root'))