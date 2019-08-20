// simple redux todo-list

// npm install redux react - redux--save

// index.js

import { Provider } from 'react-redux'
import store from ''

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'))


// action

export const DELETE_TODO = 'DELETE_TODO'
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}

export const ADD_TODO = 'ADD_TODO'
export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo
    }
}

// reducer

import { DELETE_TODO, ADD_TODO } from './action'

const initialState = [
    { id: 1, content: '' },
    { id: 2, content: '' },
    { id: 3, content: '' }
]

const Reducer = (state = initialState, action) => {
    console.log(action)
    let result = []
    switch (action.type) {
        case DELETE_TODO:
            result = state.filter(e => e.id !== action.id)
            break;
        case ADD_TODO:
            const id = state.length === 0 ? state.slice(-1)[0].id + 1 : 1
            const newTodo = { id: id, content: action.todo }
            // console.log(newTodo)
            result = [...state, newTodo]
            break;
        default:
            result = state

    }
    return result
}

export default Reducer


// store

import { createStore } from 'redux'
import Reducer from './reducer'

const store = createStore(Reducer)

export default store


// component
import React from 'react'
import { connect } from 'react-redux'

class componentName extends React.Component {
    render() {
        return <div></div>
    }
}

function mapState2Prop(state) {
    return { data: state }
}

export default connect()(componentName)