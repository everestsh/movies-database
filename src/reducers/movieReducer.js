

// import movies from './../data.js';

export const initialState = {
  movies: "movies",
  appTitle: "IMDB Movie Database"
}


  const movieReducer = (state, action) => {
    //   console.log("reducer state =", state)
      console.log("reducer action = ", action)
    switch (action.type) {
      default:
        return state;
    }
  };
  export default movieReducer;