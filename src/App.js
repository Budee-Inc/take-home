import React, { Component } from 'react';
import './index.css';

//import components here
import Row from './component/Row';

class App extends Component {
  render() {
    //loop through the initialized n-8 and create n-8 rows
    let rows = [];
    for (let i = 0; i < 8; i++) {
      rows.push(<Row key={i}number={i} />);
    }
    return (
      <React.Fragment>
        <div className="app">{rows}</div>
      </React.Fragment>
    );
  }
}

export default App;
