import React, {useState, useReducer } from "react";
import movieReducer, {initialState} from './reducers/movieReducer';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Movie from "./components/Movie";
import Header from "./components/Header";
import MovieHeader from "./components/MovieHeader";

function App(props) {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  // const reduce = reducer(initialState, {type:''})

  console.log("App.js state = ", state)
  console.log("App.js dispatch = ", dispatch)
  // console.log(reduce)
  return (
    <div className="App">
      <Header/>
      {/* <h1>Test</h1> */}
      {/* <h1>{reduce.title}</h1> */}
      {/* <h1>{state.title}</h1>
      <Movie/> */}
      <div className="container">
        <MovieHeader/>
        <div className="row ">
          {/* {displayFavorites && <FavoriteMovieList/>} */}
        
          <Switch>
            <Route exact path="/movies/add">
              {/* <AddMovieForm />   */}
            </Route>

            <Route path="/movies/:id">
              <Movie />
            </Route>

            <Route path="/movies">
              {/* <MovieList/> */}
            </Route>

            <Route path="/">
              <Redirect to="/movies"/>
            </Route>
          </Switch>
        </div>
      </div>  
    </div>
  );
}

export default App;
