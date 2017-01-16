import React, { Component } from 'react';

class QuoteContainer extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.quote.quote}</h3>
                <p>{this.props.quote.author}</p>
            </div>
        );
    }
}

export default QuoteContainer;