import React from 'react';

class Coordinates extends React.Component {
    state = {
        x: 0, y: 0
    }

    getCoordinates = (e) => {
        e.preventDefault();
        this.setState(() => {
            return { x: e.screenX, y: e.screenY }
        });
        e.persist();
    }

    render() {
        const { x, y } = this.state;
        return (
            <div onMouseMove={this.getCoordinates}>
                Mouse Coordinates: {x} {y}
            </div>
        )
    }
}

export default Coordinates;