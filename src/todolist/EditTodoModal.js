import React, { Component } from "react";
import { Input, Form, Modal, Row, Col, Button } from "antd";
import {
  BellOutlined,
  UserAddOutlined,
  FormatPainterOutlined,
  PictureOutlined,
  DownSquareOutlined,
  TagOutlined
} from "@ant-design/icons";
// import EditColorModal from "./EditColorModal";
import { toggleTags } from '../connector'
import PickTagPopover from './PickTagPopover'
import PickColorPopover from './PickColorPopover'
import Button2ArchiveNote from './Button2ArchiveNote'


export default class EditTodoModal extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    // this.state = {
    //   showColorModal: false,
    // };
  }

  handleEditTodo = (e) => {
    e.preventDefault();
    const { onEditTodo, note } = this.props;
    const { current: form } = this.formRef;
    form.validateFields().then((values) => {
      onEditTodo(note, values);
    });
  };

  handleCancel = (e) => {
    this.props.onCancel();
  };

  //------------以下為編輯顏色函式-------------

  // //打開顏色Modal
  // openColorModal = (e) => {
  //   this.setState({ showColorModal: true });
  // };

  // //儲存顏色
  // rememberColor = (color) => {
  //   this.setState(() => ({
  //     showColorModal: false,
  //   }));
  //   this.props.onColor(color);
  // };

  // //顏色取消
  // handleColorCancel = (e) => {
  //   this.setState({ showColorModal: false });
  // };

  render() {
    const {
      handleEditTodo,
      handleCancel,
    } = this;
    const { visible, title, description, note } = this.props;
    return (
      <Modal
        title={"Edit Note"}
        visible={visible}
        okText="存檔"
        cancelText="取消"
        onOk={handleEditTodo}
        onCancel={handleCancel}
        destroyOnClose={true}
      >
        <Form
          name="edit-form"
          labelCol={{ span: 4 }}
          wrapperCol={{ spane: 20 }}
          ref={this.formRef}
        >
          <Form.Item name="title" initialValue={title}>
            <Input.TextArea style={{ height: "10px", border: "0" }} />
          </Form.Item>

          <Form.Item name="description" initialValue={description}>
            <Input.TextArea style={{ height: "300px", border: "0" }} />
          </Form.Item>
          
          <div>
            <Row justify='start' style={{ margin: "10px" }}>
              <Col flex={1}>
                <Button
                  style={{ border: "0" }}
                  title={"提醒我"}
                  type="primary"
                  ghost
                  size="small"
                  shape={"circle"}
                  icon={<BellOutlined />}
                ></Button>
              </Col>
              <Col flex={1}>
                <Button
                  style={{ border: "0" }}
                  title={"協作者"}
                  type="primary"
                  ghost
                  size="small"
                  shape={"circle"}
                  icon={<UserAddOutlined />}
                ></Button>
              </Col>
              <Col flex={1}>
                <PickColorPopover note={note} />
              </Col>
              <Col flex={1}>
                <Button
                  style={{ border: "0" }}
                  title={"新增圖片"}
                  type="primary"
                  ghost
                  size="small"
                  shape={"circle"}
                  icon={<PictureOutlined />}
                ></Button>
              </Col>
              <Col flex={1}>
                <Button2ArchiveNote note={note} />
              </Col>
              <Col flex={1}>
                <PickTagPopover note={note}/>
              </Col>


            </Row>
          </div>
        </Form>
      </Modal>
    );
  }
}
