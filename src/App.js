import React, { Component } from 'react';
import QuoteContainer from './components/QuoteContainer';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          quote: {
              quote: "hello how are you",
              author: "boopesh"
          }
      }
  }
  render() {
    return (
      <div>
        <QuoteContainer quote={this.state.quote}/>
      </div>
    );
  }
}

export default App;
