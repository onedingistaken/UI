import React from 'react'

const Todo = function ({ todos, deleteTodo }) {
    return (
        <div className='Todo'>
            {
                todos.length !== 0 ?
                    (todos && todos.map((e, i) => (
                        <div className='todo' key={i}>
                            <label>{e.content}</label>
                            <button type='button' onClick={() => deleteTodo(e.id)}>x</button>
                        </div>
                    ))) :
                    (<p>Yay! No todos left!</p>)
            }
        </div>
    )
}

export default Todo