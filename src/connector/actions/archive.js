import { ARCHIVE_ADD, ARCHIVE_REMOVE } from './action-types'
export const addArchive = (id) => {
    return {
        type: ARCHIVE_ADD,
        id,
    }
}
export const removeArchive = (id) => {
    return {
        type: ARCHIVE_REMOVE,
        id,
    }
}