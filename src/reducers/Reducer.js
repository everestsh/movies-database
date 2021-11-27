


export const initialState = {
    title: 'Title from Redux store'
  }


  const reducer = (state, action) => {
    //   console.log("reducer state =", state)
      console.log("reducer action = ", action)
    switch (action.type) {
      default:
        return state;
    }
  };
  export default reducer;