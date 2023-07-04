import React from 'react'
import { Button } from "antd";
import {
    PushpinOutlined,
} from "@ant-design/icons";
import { PinNote } from "../connector";
import { updateNotes } from "../connector";
const Button2PinNote = (props) => {
    const { note } = props;
    return <Button
        title={"釘選"}
        ghost
        shape="circle"
        size="small"
        type="primary"
        style={{ border: "0" }}
        icon={<PushpinOutlined />}
        onClick={(e)=>{
            e.preventDefault()
            if (PinNote.next.includes(note)) {
                PinNote.removeNext(note)
            } else {
                PinNote.addNext(note)
            }
            console.log(PinNote)
            updateNotes()
        }}
    />
}

export default Button2PinNote