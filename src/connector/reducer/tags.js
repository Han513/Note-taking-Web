import { Types } from '../actions'
const state0 = []
const tags = (state=state0, action) => {
    const { note } = action
    switch(action.type) {
        case Types.TAGS_ADD:
            return [note].concat(state)
        case Types.TAGS_REMOVE:
            return state.filter(x=>x.id!==note.id)
        default:
            return state
    }
}
export default tags