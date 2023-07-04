import { Types } from '../actions'

const state0 = {
    visible: false,
}

const editor = (state = state0, action) => {
    switch (action.type) {
        case Types.SHOW_EDITOR:
            return Object.assign({}, state, { visible: true });
        case Types.HIDE_EDITOR:
            return Object.assign({}, state, { visible: false })
        default:
            return state;
    }
}

export default editor;