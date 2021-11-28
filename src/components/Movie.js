import React, {useState, useReducer } from "react";
import reducer, {initialState} from '../reducers/Reducer';
// import './App.css';

function Movie(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log(reduce)
  return (
    <div className="App">
      <h1>Movie</h1>
      {/* <h1>{reduce.title}</h1> */}
      <h1>{state.title}</h1>
    </div>
  );
}

export default Movie;