import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList';
import { connect } from 'react-redux'
import { deleteTodo } from './store/actions/Todo'

class App extends React.Component {
    state = {
        todos: []
    }
    deleteTodo = (id) => {
        this.props.dispatch(deleteTodo(id))
    }

    render() {
        return (
            <div className="App">
                <AddTodo />
                <TodoList todos={this.props.todos} deleteTodo={this.deleteTodo} />
            </div>
        )
    }
}

function mapState2Props(store) {
    return {
        todos: store
    }
}

export default connect(mapState2Props)(App)
