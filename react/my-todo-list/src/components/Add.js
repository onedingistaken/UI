import React from 'react'

class Add extends React.Component {
    state = {
        text: ''
    }

    inputOnChange = (e) => {
        // console.log(e.target.name, e.target.value)
        this.setState(() => {
            return {
                [e.target.name]: e.target.value
            }
        })
        e.persist()
    }

    addTodo = (e) => {
        // console.log(this.state.todo)
        e.preventDefault()
        if (this.state.text.length !== 0) { this.props.addTodo(this.state.text) }
        this.setState({ text: '' })
    }

    render() {
        return (
            <div className='Add'>
                <h2>Add to Todo List</h2>
                <div className='input-container'>
                    <input type='text' placeholder='add to todo list..' name='text' onChange={this.inputOnChange} value={this.state.text} />
                    <button type='button' onClick={this.addTodo}>+</button>
                </div>
            </div>
        )
    }
}

export default Add