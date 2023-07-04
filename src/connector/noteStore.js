import mainReducer from './reducer'
import { Action } from './actions'
import { createStore } from 'redux'
import data from '../data'
const { Notes } = Action
const store = createStore(mainReducer)
for (var x of data) {
    store.dispatch(Notes.addNewNote({ prev: [], ...x }))
}
export default store