import React from 'react'
import { Popover } from 'antd';
import { Button } from 'antd';
import { Checkbox } from 'antd';
import { connect } from "react-redux";
import {
    TagOutlined,
} from "@ant-design/icons";
import { linkNote, unlinkNote } from '../connector'
const TagCheckbox = (props) => {
    const { tag, note } = props
    const [checked, setChecked] = React.useState(note.prev.includes(tag))
    return <Checkbox
        checked={checked}
        onChange={(e) => {
            const { checked } = e.target;
            if (checked) {
                linkNote(tag, note)
                setChecked(checked)
            } else {
                unlinkNote(tag, note)
                setChecked(checked)
            }
        }}
    >
        {tag.data.title}
    </Checkbox>
}
const PickTagPopover = (props) => {
    const { tags, note } = props
    return <Popover content={
        tags.map(x => {
            return <TagCheckbox key={x.id} tag={x} note={note} />
        })
    }>
        <Button
            style={{ border: "0" }}
            title={"標籤"}
            type="primary"
            ghost
            size="small"
            shape={"circle"}
            icon={<TagOutlined />}
        />
    </Popover>
}
export default connect(({ tags }) => ({ tags }))(PickTagPopover)