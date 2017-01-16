import React, { Component } from 'react';

class QuoteContainer extends Component {
    render() {
        return (
            <div>
                <h2 style={{textTransform: 'uppercase'}}>{this.props.quote.quote}</h2>
                <p style={{textAlign: 'right', textTransform: 'capitalize'}}> - {this.props.quote.author}</p>
            </div>
        );
    }
}

export default QuoteContainer;