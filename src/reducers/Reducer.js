


export const initialState = {
    title: 'Title from Redux store'
  }


  const reducer = (action) => {
    //   console.log("reducer state =", state)
    //   console.log("reducer action = ", action)
    //   return state;
    switch (action) {
      default:
        return initialState;
    }
  };
  export default reducer;