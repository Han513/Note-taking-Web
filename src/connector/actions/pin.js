import {PIN_ADD,PIN_REMOVE} from './action-types'
export const addPin = (note) => {
    return {
        type: PIN_ADD,
        note,
    }
}
export const removePin = (note) => {
    return {
        type: PIN_REMOVE,
        note,
    }
}