import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import { Modal } from 'antd'
import { PlusOutlined } from "@ant-design/icons";
import { openEditor, closeEditor } from './connector'

const state2props = (state) => {
    const { visible } = state.editor;
    return { visible }
}

const TheEditor = (props) => {
    const { visible } = props;
    return <div className='transparent-holder'>
        {
            React.createElement(PlusOutlined,
                {
                    id: 'new-note-button',
                    onClick: openEditor,
                    style: {
                        color: 'black',
                    }
                }
            )
        }
        <Modal
            className='transparent'
            // title="Basic Modal" 
            visible={visible}
            footer={null}
            closable={false}
            mask={true}
            width='80%'
            onOk={closeEditor}
            onCancel={closeEditor}
            bodyStyle={{
                padding: '0',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                height: '80vh',
                // overflow: 'auto',
            }}
        >
            <Row
                gutter={100}
                style={{ height: '100%' }}
            >
                <Col flex={1}><div id='prev-notes'></div></Col>
                <Col flex={3}><div id='editor'></div></Col>
                <Col flex={1}><div id='next-notes'></div></Col>
            </Row>
        </Modal>
    </div>
}

export default connect(state2props)(TheEditor);