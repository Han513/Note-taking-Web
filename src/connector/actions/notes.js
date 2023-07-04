import { ADD_NOTE, NOTE_LINK, NOTE_UNLINK, NOTE_SET_COLOR, NOTE_UPDATE } from './action-types'
export const addNewNote = (noteData, prev=[]) => {
    return {
        type: ADD_NOTE,
        payload: {prev, ...noteData},
    }
}

export const linkNote = (a, b) => {
    return {
        type: NOTE_LINK,
        a,
        b,
    }
}

export const unlinkNote = (a, b) => {
    return {
        type: NOTE_UNLINK,
        a,
        b,
    }
}

export const setNoteColor = (note, color) => {
    return {
        type: NOTE_SET_COLOR,
        note,
        color,
    }
}

export const updateNotes = () => {
    return {
        type: NOTE_UPDATE,
    }
}

