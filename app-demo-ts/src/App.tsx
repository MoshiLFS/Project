import * as React from 'react';
import '../src/static/App.min.css';
import Header from './myTest/component/header/header'
import Main from './myTest/component/main/main'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
