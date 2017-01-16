import React, { Component } from 'react';

class ChangeQuote extends Component {
    render() {
        var style = {
            padding: 10,
            color: 'white',
            fontSize: '1.1rem',
            backgroundColor: '#D84315',
            border: 'none'
        };
        return (
            <button style={style} onClick={this.props.changeQuote}>Change Quote</button>
        );
    }
}

export default ChangeQuote;