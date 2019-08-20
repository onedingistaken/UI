import { DELETE_TODO, ADD_TODO } from './Action'

const initialState = [
    { id: 1, content: 'todo1' },
    { id: 2, content: 'todo2' },
    { id: 3, content: 'todo3' },
    { id: 4, content: 'todo4' }
]

const Reducer = (state = initialState, action) => {
    console.log(action)
    let result = []
    switch (action.type) {
        case DELETE_TODO:
            result = state.filter(e => e.id !== action.id)
            break

        case ADD_TODO:
            const id = state.length ? state.slice(-1)[0].id + 1 : 1
            const obj = { id: id, content: action.text }
            console.log(obj);
            result = [...state, obj]
            break

        default:
            result = state
    }
    return result
}

export default Reducer