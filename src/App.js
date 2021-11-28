import React, {useState, useReducer } from "react";
import reducer, {initialState} from './reducers/Reducer';
import './App.css';
import Movie from "./components/Movie";

function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const reduce = reducer(initialState, {type:''})

  console.log("App.js state = ", state)
  console.log("App.js dispatch = ", dispatch)
  // console.log(reduce)
  return (
    <div className="App">
      {/* <h1>Test</h1> */}
      {/* <h1>{reduce.title}</h1> */}
      <h1>{state.title}</h1>
      <Movie/>
    </div>
  );
}

export default App;
