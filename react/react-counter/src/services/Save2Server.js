import React from 'react';

export default function (WrappedComponent) {
    return class extends React.Component {
        get = () => {
            return fetch('http://localhost:4000')
                .then(res => res.json());
        }
        set = (count) => {
            return fetch('http://localhost:4000', {
                method: 'POST',
                body: JSON.stringify({ count: count }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json());
        }
        update = (signal) => {
            return this.get()
                .then(res => res.count + signal)
                .then(update => {
                    this.set(update);
                    return update;
                });
        }
        render() {
            const props = {
                get: this.get,
                set: this.set,
                update: this.update
            }
            return <WrappedComponent {...props} />
        }
    }
}