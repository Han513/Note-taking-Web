import React, { Component } from "react";
import { Input, Switch, Form, Modal, DatePicker } from "antd";
import moment from "moment";
import { createNote, linkNote } from '../connector'
import PickTagPopover from './PickTagPopover'

export default class CreateTodoModal extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  handleAddTodo = (e) => {
    e.preventDefault();
    const { tag } = this.props
    const { current: form } = this.formRef;
    form.validateFields().then((values) => {
      createNote(values)
      // linkNote(tag, )
      this.handleCancel()
    });
  };

  handleCancel = (e) => {
    this.props.onCancel();
  };

  render() {
    const { handleAddTodo, handleCancel } = this;
    const { visible } = this.props;

    return (
      <Modal
        title="新增"
        visible={visible}
        okText="存檔"
        cancelText="取消"
        onOk={handleAddTodo}
        onCancel={handleCancel}
        destroyOnClose={true}
      >
        <Form
          name="todo-form"
          labelCol={{ span: 4 }}
          wrapperCol={{ spane: 20 }}
          ref={this.formRef}
          initialValues={{ expiredDate: moment(), completed: false }}
        >
          <Form.Item
            label="標題"
            name="title"
            hasFeedback
            rules={[
              { required: true, message: "請填寫標題" },
              { max: 20, message: "字串長度不可超過 20 字元" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="描述"
            name="description"
            rules={[{ required: false, message: "請填寫描述" }]}
            hasFeedback
          >
            <Input.TextArea />
          </Form.Item>

          {/* <Form.Item
            // label="到期日"
            name="expiredDate"
            rules={[{ required: true, message: "請選擇到期日" }]}
            hasFeedback
          >
            <DatePicker
              showTime={{ format: "HH:mm" }}
              format="YYYY-MM-DD HH:mm"
            />
          </Form.Item> */}
          {/* <Form.Item
            label="完成"
            name="completed"
            valuePropName="checked"
            ruels={[{ required: true }]}
          >
            <Switch checkedChildren="是" unCheckedChildren="否" />
          </Form.Item> */}
        </Form>
      </Modal>
    );
  }
}
