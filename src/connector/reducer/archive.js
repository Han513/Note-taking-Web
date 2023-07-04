import {Types} from '../actions'
const state0 = []
const archive = (state = state0, action) => {
    const { id } = action
    switch(action.type) {
        case Types.ARCHIVE_ADD:
            return [id].concat(state)
        case Types.ARCHIVE_REMOVE:
            return state.filter(x=>x!==id)
        default:
            return state
    }
}
export default archive