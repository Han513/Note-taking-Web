import store from './noteStore'
import { Action } from './actions'

const { Notes, Tags, Pin } = Action;


const { Editor: { showEditor, hideEditor } } = Action
export const openEditor = () => {
    store.dispatch(showEditor())
}
export const closeEditor = () => {
    store.dispatch(hideEditor())
}

const { Sider: { openSider, closeSider } } = Action
export const toggleSider = () => {
    const { collapsed } = store.getState().sider
    if (collapsed) {
        store.dispatch(openSider())
    } else {
        store.dispatch(closeSider())
    }
}

const { Tags: { addTag, removeTag } } = Action
export const add2Tags = (note) => {
    store.dispatch(addTag(note))
}
export const remove4Tags = (note) => {
    store.dispatch(removeTag(note))
}
export const toggleTags = (note) => {
    if (store.getState().tags.find(x => x.id === note.id)) {
        remove4Tags(note)
    } else {
        add2Tags(note)
    }
}
export const isTags = (note) => {
    return store.getState().tags.includes(note)
}

export const AllNote = store.getState().notes.find(x => x.id === 'all')
export const ArchiveNote = store.getState().notes.find(x => x.id === 'archive')
export const TrashNote = store.getState().notes.find(x => x.id === 'trash')
export const PinNote = store.getState().notes.find(x => x.id === 'pin')

export const getNote = (id) => {
    if (id === 'all') {
        return AllNote
    } else if (id === 'archive') {
        return ArchiveNote
    } else if (id === 'trash') {
        return TrashNote
    } else {
        return AllNote.next.find(x => x.id === id)
    }
}

export const createNote = (x, prev) => {
    store.dispatch(Notes.addNewNote(x, prev))
}

export const updateNotes = () => {
    store.dispatch(Notes.updateNotes())
}

export const setNoteColor = (note, color) => {
    store.dispatch(Notes.setNoteColor(note, color))
}

export const archiveNote = (note) => {

}

export const pinNote = (note) => {
    store.dispatch(Pin.addPin(note))
}

export const unpinNote = (note) => {
    store.dispatch(Pin.removePin(note))

}

export const linkNote = (a, b) => {
    store.dispatch(Notes.linkNote(a, b))
}

export const unlinkNote = (a, b) => {
    store.dispatch(Notes.unlinkNote(a, b))
}


console.log(store.getState().notes)
const _1 = getNote('_1')
const _2 = getNote('_2')
const _3 = getNote('_3')
// _1.setColor('#0000ff')
store.dispatch(Notes.linkNote(_3, _1))
store.dispatch(Notes.linkNote(_1, _2))
store.dispatch(Notes.linkNote(_2, _3))
store.dispatch(Notes.linkNote(_1, _3))
store.dispatch(Notes.unlinkNote(_3, _1))
store.dispatch(Tags.addTag(_1))
store.dispatch(Tags.addTag(_2))
console.log(store.getState().notes)
export { store }