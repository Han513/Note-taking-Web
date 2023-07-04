import React from "react";
import { Button } from "antd";
import { List } from "antd";
import TodoListItem from "./TodoListItem";
import { ArchiveNote, TrashNote, PinNote, getNote } from "../connector";
import { connect } from "react-redux";
import Button2CreateNote from './Button2CreateNote'
import TopNote from '../TopNote'


const TodoList = (props) => {
  const { notes, onEditTodo, tag } = props;
  const pin = notes.filter(x=>PinNote.next.includes(x))
  const unpin = notes.filter(x=>!PinNote.next.includes(x))
  // console.log(notes )
  return (
    <div>
      
      <div style={{
        margin: '0 auto'
      }}>
        <TopNote />
      </div>
      <Button2CreateNote tag={tag} />
      {
        pin.length!==0 && 
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={pin}
          renderItem={(note) => (
            <List.Item>
              <TodoListItem
                note={note}
                todo={{ id: note.id, ...note.data }}
                onEditTodo={onEditTodo}
              />
            </List.Item>
          )}
        />
      }
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={unpin}
        renderItem={(note) => (
          <List.Item>
            <TodoListItem
              note={note}
              todo={{ id: note.id, ...note.data }}
              onEditTodo={onEditTodo}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
const state2props = (state, ownProps) => {
  const { tag } = ownProps
  const tagID = tag.id
  if (tagID === 'all') {
    const notes = tag.next.filter(x=>!ArchiveNote.next.includes(x)&&!TrashNote.next.includes(x))
    return ({ notes })
  } else {
    return ({ notes: [...tag.next] })
  }
}
export default connect(
  state2props
)(TodoList)
// export default (TodoList);