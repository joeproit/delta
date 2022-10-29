import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <p>Welcome :)</p>

      <div className="card">
        <h2>JoePro</h2>
        <p className="title">Example</p>
        <p>Hardknocks</p>
        <div style={{ margin: '24px 0' }}>
          <a href="#"><i className="fa fa-dribbble"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-facebook"></i></a>
        </div>  
    </div>
    </div>
  );
}

export default App;
