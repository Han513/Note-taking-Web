import React from 'react'
import moment from 'moment'
import { getNote } from "./connector";
import { Link, withRouter, matchPath } from "react-router-dom";
import TodoListItem from "./todolist/TodoListItem";
import { Row, Col } from 'antd'
const TopNote = (props) => {
    const { location } = props
    const match = matchPath(location.pathname, {
        path: '/tags/:id',
        isExact: true,
    })
    const note = getNote(match.params.id) || {}
    // console.log(note)
    return (

        <TodoListItem
            note={note}
            todo={{ id: note.id, ...note.data }}
        // onCompleteChange={onCompleteChange}
        // onEditTodo={onEditTodo}
        />
        // <Row>
        //     {
        //         match && match.isExact && <>
        //             <Col>{note.data.title}</Col>
        //             <Col>{note.data.description}</Col>
        //             <Col>{moment(note.data.expiredDate).format("YYYY-MM-DD hh:mm")}</Col>
        //         </>
        //     }
        // </Row>
    )
}
export default withRouter(TopNote)