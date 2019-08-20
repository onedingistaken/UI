import React, { Component } from 'react';
import Item from './Item';
import Target from './Target';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

class Dnd extends Component {
    state = {
        items: [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' },
            { id: 4, name: 'Item 4' }
        ]
    }

    render() {
        return (
            <div className="Dnd">
                <div className="item-container">
                    {this.state.items.map((e, i) => (
                        <Item key={e.id} item={e} />
                    ))}
                </div>
                <div className="target-container">
                    <Target />
                </div>
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(Dnd);