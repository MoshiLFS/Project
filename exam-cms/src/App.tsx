import * as React from 'react';
import './App.css';
import Login from './views/login'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}

export default App;