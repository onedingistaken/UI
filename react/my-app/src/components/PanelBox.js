import React, { Component } from 'react';

class PanelBox extends Component {
    state = {}
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">{this.props.heading}</div>
                <div className="panel-body">{this.props.content}</div>
            </div>
        )
    }
}

export default PanelBox;