import React, {useState, useReducer } from "react";
import movieReducer, {initialState} from '../reducers/movieReducer';
// import './App.css';

function Movie(props) {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  console.log("state.movies ", state.movies)
  return (
    <div className="App">
      <h1>Movie</h1>
      {/* <h1>{reduce.title}</h1> */}
      <h1>{state.movies}</h1>
    </div>
  );
}

export default Movie;