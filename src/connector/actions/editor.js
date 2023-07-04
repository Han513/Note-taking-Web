
import { SHOW_EDITOR, HIDE_EDITOR} from './action-types'

export const showEditor = () => {
    return {
        type: SHOW_EDITOR,
    }
}

export const hideEditor = () => {
    return {
        type: HIDE_EDITOR,
    }
}