import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

function reducer() {
  return {
    title: 'Title from Redux store'
  };
}

const store = createStore(reducer);

function App(props) {
  
  // console.log(props)

  // console.log(reducer)
  const reduce = reducer()
  // console.log(reduce.title)
  return (
    <div className="App">
      {/* <h1>Test</h1> */}
      <h1>{reduce.title}</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
  
  <Provider store={store}>
      <Router>
          <App />
      </Router>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
