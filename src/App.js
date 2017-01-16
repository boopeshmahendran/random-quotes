import React, { Component } from 'react';
import QuoteContainer from './components/QuoteContainer';
import ChangeQuote from './components/ChangeQuote';
import $ from 'jquery';

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
  changeQuote() {
      var self = this;
      $.ajax({
          url: 'http://quotesondesign.com/wp-json/posts',
          data: {
              'filter[orderby]': 'rand',
              'filter[posts_per_page]': 1
          },
          success: function(data) {
              self.setState({
                      quote: {
                          quote: data[0].content,
                          author: data[0].title,
                      }
              });
              console.log(data[0]);
          }
      });
  }
  render() {
    return (
      <div>
        <QuoteContainer quote={this.state.quote}/>
        <ChangeQuote changeQuote={this.changeQuote.bind(this)}/>
      </div>
    );
  }
}

export default App;
