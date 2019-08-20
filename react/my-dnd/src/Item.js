import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="Item">
                {this.props.name}
            </div>
        )
    }
}

export default Item;