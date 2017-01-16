import React, { Component } from 'react';

class ChangeQuote extends Component {
    render() {
        return (
            <button onClick={this.props.changeQuote}> ChangeQuote</button>
        );
    }
}

export default ChangeQuote;