import React from 'react'
import '../App.css'

const TodoList = ({ todos, deleteTodo }) => {
    const todoList = todos ? (todos.map((e, i) => {
        const bgColor = i % 2 === 1 ? 'white' : 'lightGrey'
        return (
            <div key={e.id}>
                <table>
                    <thead>
                        <tr style={{ backgroundColor: bgColor }}>
                            <td>{e.content}</td>
                            <button type='button' onClick={() => deleteTodo(e.id)}>x</button>
                        </tr>
                    </thead>
                </table>
            </div>)
    })) : (<p>Yay! No todos left!</p>)

    return (
        <div className='TodoList'>
            {todoList}
        </div>
    )
}

export default TodoList