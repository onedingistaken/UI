import React from 'react';
class Details extends React.Component {
    render() {
        // const user = this.props.user
        return (
            <div className='Details'>
                <button onClick={() => this.props.history.push('/')}>Back</button>
                {JSON.stringify(this.props.location)}
            </div>
        )
    }
}

export default Details;