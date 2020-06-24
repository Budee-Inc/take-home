import React, { Component } from 'react';
import './index.css';

//import components here
import Row from './component/Row';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({
      size: e.target.value,
    });
    e.preventDefault();
  };

  onSubmit = (e) => {
    e.preventDefault();
    // this.setState({
    //   size: e.target.value,
    // });
  };
  render() {
    //loop through the initialized n-8 and create n-8 rows
    let rows = [];
    for (let i = 1; i <= this.state.size; i++) {
      rows.push(<Row key={i} number={i} size={Number(this.state.size)} />);
    }
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            id="boardsize"
            name="InsertBoardSize"
            value={this.state.size}
            onChange={this.onChange}
            placeholder=" Choose your board size"
          />
          <input type="submit" value="Play" />
        </form>
        <div className="app">{rows}</div>
      </React.Fragment>
    );
  }
}

export default App;
