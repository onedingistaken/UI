import React, { Component } from 'react';

class EmptyInput extends Component {
    render() {
        const style = {
            color: "red"
        }
        return (
            <div style={style}>
                {this.props.target} can't be empty!
            </div>
        )
    }
}

export default EmptyInput;

