import React from 'react'
import { Button } from "antd";
import {
    DeleteOutlined,
} from "@ant-design/icons";
import { updateNotes } from "../connector";
import { TrashNote } from '../connector'
const Button2TrashNote = (props) => {
    const { note } = props;
    return <div>
        <Button
            title={"垃圾桶"}
            ghost
            shape="circle"
            size="small"
            type="primary"
            style={{ border: "0" }}
            icon={<DeleteOutlined />}
            onClick={(e)=>{
                e.preventDefault()
                if (TrashNote.next.includes(note)) {
                    TrashNote.removeNext(note)
                } else {
                    TrashNote.addNext(note)
                }
                updateNotes()
            }}
            />
    </div>
}

export default Button2TrashNote;