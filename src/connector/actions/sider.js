import { OPEN_SIDER, CLOSE_SIDER, TOGGLE_SIDER } from './action-types'

export const openSider = () => {
    return {
        type: OPEN_SIDER,
    }
}

export const closeSider = () => {
    return {
        type: CLOSE_SIDER,
    }
}

export const toggleSider = () => {
    return {
        type: TOGGLE_SIDER,
    }
}