import { Types } from '../actions'

const state0 = {
    collapsed: false,
}

const sider = (state = state0, action) => {
    switch (action.type) {
        case Types.OPEN_SIDER:
            {
                return Object.assign({}, state, { collapsed: false })
            }
        case Types.CLOSE_SIDER:
            {
                return Object.assign({}, state, { collapsed: true })
            }
        case Types.TOGGLE_SIDER:
            {
                const { collapsed } = state;
                return Object.assign({}, state, { collapsed: !collapsed })
            }
        default:
            return state;
    }
}

export default sider;