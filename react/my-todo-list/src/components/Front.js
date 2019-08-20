import React from 'react'
import Add from './Add'
import Todo from './Todo'
import { connect } from 'react-redux'
import { deleteTodo, addTodo } from '../store/Action';

class Front extends React.Component {
    state = {
        todos: []
    }

    componentDidMount() {
        this.setState(() => ({ todos: this.props.todos }))
    }

    deleteTodo = (id) => {
        this.props.dispatch(deleteTodo(id))
    }

    addTodo = (todo) => {
        this.props.dispatch(addTodo(todo))
    }

    render() {
        return (
            <div className='Front'>
                <Add addTodo={this.addTodo} />
                <Todo todos={this.props.todos} deleteTodo={this.deleteTodo} />
            </div>
        )
    }
}

function mapState2Prop(store) {
    return {
        todos: store
    }
}

export default connect(mapState2Prop)(Front)
