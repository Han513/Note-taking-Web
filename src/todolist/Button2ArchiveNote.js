import React from 'react'
import { Button } from "antd";
import {
    InboxOutlined,
} from "@ant-design/icons";
import { updateNotes } from "../connector";
import { ArchiveNote } from '../connector'
const Button2ArchiveNote = (props) => {
    const { note } = props;
    return <div>
        <Button
            title={"封存"}
            ghost
            shape="circle"
            size="small"
            type="primary"
            style={{ border: "0" }}
            icon={<InboxOutlined />}
            onClick={(e)=>{
                e.preventDefault()
                if (ArchiveNote.next.includes(note)) {
                    ArchiveNote.removeNext(note)
                } else {
                    ArchiveNote.addNext(note)
                }
                updateNotes()
            }}
            />
    </div>
}

export default Button2ArchiveNote;