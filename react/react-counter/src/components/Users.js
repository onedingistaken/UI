import React from 'react';
import { Link } from 'react-router-dom';

class Users extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                this.setState(() => {
                    return { users: data }
                })
            })
    }

    render() {
        const users = this.state.users;
        return (
            <div className='Users'>
                <table border='1px'>
                    {users && users.map((item, index) => (
                        <tbody key={item.id}>
                            <tr>
                                <td>
                                    <Link to={{
                                        pathname: '/' + item.id,
                                        state: { users: users }
                                    }}>{item.name}</Link>
                                </td>
                                <td>{item.email}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>

            </div>
        )
    }
}

export default Users;