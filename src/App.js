
import reducer from './reducers/Reducer';
import './App.css';

function App(props) {
  
  // console.log(props)

  // console.log(reducer)
  const reduce = reducer({})

  // console.log(reduce.title)
  return (
    <div className="App">
      {/* <h1>Test</h1> */}
      <h1>{reduce.title}</h1>
    </div>
  );
}

export default App;
