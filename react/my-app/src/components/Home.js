import React from 'react';

const Home = (props) => {
    return (
        <div className="jumbotron">
            <h2>Welcome to my Post Board!</h2>
            <p>Please login to unlock access..</p>
            <p><a className="btn btn-primary btn-lg" href="/login" role="button">Learn more</a></p>
        </div>
    )
}

export default Home;