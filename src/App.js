
import reducer, {initialState} from './reducers/Reducer';
import './App.css';

function App(props) {
  

  const reduce = reducer(initialState, {type:''})

  // console.log(reduce.title)
  return (
    <div className="App">
      {/* <h1>Test</h1> */}
      <h1>{reduce.title}</h1>
    </div>
  );
}

export default App;
