import React from 'react'
import CreateTodoModal from "./CreateTodoModal"
import { PlusOutlined } from "@ant-design/icons"
import { connect } from 'react-redux'
import { openEditor, closeEditor } from '../connector'
import { Button } from "antd"

const Button2CreateNote = (props) => {
    const { visible, tag } = props;
    return <div>
        <div style={{ margin: "10px 0px", display: "flex" }}>
            <Button
                type="primary"
                icon={<PlusOutlined />}
                style={{ marginLeft: "auto" }}
                onClick={openEditor}
            >
                新增
          </Button>
            <CreateTodoModal
                visible={visible}
                onCancel={closeEditor}
                tag={tag}
            />
        </div>
    </div>
}

const state2props = (state) => {
    const { visible } = state.editor;
    return { visible }
}
export default connect(state2props)(Button2CreateNote)