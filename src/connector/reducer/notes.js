import { Types } from '../actions'
import moment from 'moment'


const makeBaseNote = (id) => {
    return {
        id,
        prev: [],
        next: [],
        data: {
            title: id,
            description: '',
            color: '#F0F0F0',
            expiredDate: '',
            createDate: moment(),
        },
        setExpiredData(date) {
            this.data.expiredDate = moment(date)
        },
        setColor(color) {
            this.data.color = color
        },
        setTitle(title) {
            this.data.title = title
        },
        setDescription(description) {
            this.data.description = description
        },
        addNext(n) {
            this.next = [n].concat(this.next)
        },
        removeNext(n) {
            this.next = this.next.filter(x => x.id !== n.id)
        },
        addPrevs(ns) {
            ns.forEach(n=>this.addPrev(n))
        },
        addPrev(n) {
            this.prev = [n].concat(this.prev)
        },
        removePrev(n) {
            this.prev = this.prev.filter(x => x.id !== n.id)
        },
    }
}

let _id = 0;
const makeUniqueId = () => '_' + (_id++)

const makeNote = (noteData) => {
    const { prev, title, description, expiredDate } = noteData;
    const n = makeBaseNote(makeUniqueId())
    // n.setTitle(title)
    // n.setDescription(description)
    // n.setColor('#ffffff')
    return Object.assign(n, {
        prev,
        data: {
            title,
            description,
            expiredDate,
            color: '#ffffff',
        }
    })
}


const add = (notes, x) => {
    const all = notes.find(x => x.id === 'all')
    all.next = [x].concat(all.next)
    return [...notes]
}


const link = (notes, a, b) => {
    a.next = [b].concat(a.next)
    b.prev = [a].concat(b.prev)
    return [...notes]
}

const unlink = (notes, a, b) => {
    a.next = a.next.filter((x) => x.id !== b.id)
    b.prev = b.prev.filter((x) => x.id !== a.id)
    return [...notes]
}

const setColor = (notes, note, color) => {
    note.data.color = color;
    return [...notes]
}
const update = (notes) => {
    return [...notes]
}

const state0 = [
    makeBaseNote('all'),
    makeBaseNote('notes'),
    makeBaseNote('archive'),
    makeBaseNote('trash'),
    makeBaseNote('pin'),
]

const notes = (state = state0, action) => {
    switch (action.type) {
        case Types.ADD_NOTE:
            console.log(action.payload.prev)
            return add(state, makeNote(action.payload))
        // return [makeNote(action.payload)].concat(state)
        case Types.NOTE_LINK:
            return link(state, action.a, action.b)
        case Types.NOTE_UNLINK:
            return unlink(state, action.a, action.b)
        case Types.NOTE_SET_COLOR:
            return setColor(state, action.note, action.color)
        case Types.NOTE_UPDATE:
            return update(state)
        default:
            return state
    }
}


export default notes



