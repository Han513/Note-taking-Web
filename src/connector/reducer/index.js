import { combineReducers } from 'redux'
import notes from './notes'
import editor from './editor'
import sider from './sider'
import tags from './tags'
import archive from './archive'
const NotesReducers = combineReducers({
  notes,
  editor,
  sider,
  tags,
  archive,
})

export default NotesReducers
