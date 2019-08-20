
import React from 'react';
import save2Server from '../services/Save2Server';

class Counter extends React.Component {
    state = {
        count: 1
    }

    componentDidMount() {
        this.props.get()
            .then(res => {
                this.setState(() => {
                    return { count: res.count }
                });
            });
    }

    resetCounter = () => {
        console.log('resetCounter');
        this.props.set(0)
            .then(() => {
                this.setState(() => {
                    return { count: 0 }
                });
            });
    }

    updateCounter = (signal) => {
        console.log('updateCounter');
        this.props.update(signal)
            .then(update => {
                this.setState(() => {
                    return { count: update }
                });
            });
    }
    render() {
        return (
            <div className='Counter' >
                <h3>Simple Counter: {this.state.count}</h3>
                <input type='button' value='reset' onClick={this.resetCounter} />
                <input type='button' value='+' onClick={() => { this.updateCounter(1) }} />
                <input type='button' value='-' onClick={() => { this.updateCounter(-1) }} />
            </div>
        )
    }
}

export default save2Server(Counter);
