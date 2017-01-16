import React, { Component } from 'react';
import QuoteContainer from './components/QuoteContainer';
import ChangeQuote from './components/ChangeQuote';
import $ from 'jquery';
import {quotes} from './quotes';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          quote: {
              quote: "hello how are you",
              author: "boopesh"
          }
      };
  }
  changeQuote() {
      var randQuote = quotes[Math.floor(Math.random() * quotes.length)];
      console.log(randQuote);
      this.setState({
          quote: randQuote
      });
  }
  render() {
    return (
      <div className='App'>
        <QuoteContainer quote={this.state.quote}/>
        <ChangeQuote changeQuote={this.changeQuote.bind(this)}/>
      </div>
    );
  }
}

export default App;
