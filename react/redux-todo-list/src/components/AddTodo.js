import React from 'react'
import '../App.css'
import { connect } from 'react-redux'
import { addTodo } from '../store/actions/Todo'

class AddTodo extends React.Component {
    state = {
        todo: {}
    }

    inputOnChange = (e) => {
        this.setState(() => {
            return {
                todo: e.target.value
            }
        })
        e.persist()
    }
    addTodo = (e) => {
        e.preventDefault()
        this.props.dispatch(addTodo(this.state.todo))
    }

    render() {
        return (
            <div className='AddTodo'>
                <label>My To Do List</label>
                <form>
                    <input type='text' name='title' onChange={this.inputOnChange} pleaseholder={'Title..'} />
                    <button type='button' onClick={this.addTodo}>Add</button>
                </form>
            </div>
        )
    }
}


export default connect()(AddTodo)