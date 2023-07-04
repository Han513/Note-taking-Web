import {TAGS_ADD,TAGS_REMOVE} from './action-types'
export const addTag = (note) => {
    return {
        type: TAGS_ADD,
        note,
    }
}
export const removeTag = (note) => {
    return {
        type: TAGS_REMOVE,
        note,
    }
}