import React from "react";
import { Form, Card, Tag, Checkbox, Row, Col, Button, notification } from "antd";
import {
  InboxOutlined,
  FieldTimeOutlined,
  TagOutlined,
  ImportOutlined,
  ExportOutlined,
  DeleteOutlined,
  VerticalAlignTopOutlined,
  BellOutlined, UserAddOutlined, PictureOutlined, DownSquareOutlined, EditOutlined
} from "@ant-design/icons";
import moment from "moment";
// import "./App.css";
import EditTodoModal from "./EditTodoModal";
import PickColorPopover from './PickColorPopover'
import PickTagPopover from './PickTagPopover'
import Button2ArchiveNote from './Button2ArchiveNote'
import Button2TrashNote from './Button2TrashNote'
import Button2PinNote from './Button2PinNote'
import EditColorModal from "./EditColorModal";
import PickDate from "./PickDate";
import { toggleTags, updateNotes, isTags } from '../connector'
import { connect } from "react-redux";
// import { AllNote, getNote } from "../connector";
import { Link } from "react-router-dom";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditModaltodo: false,
      // showColorModal: false,
      // colors: ""
    };
  }
  //打開編輯Modal
  openEditModal = (e) => {
    this.setState({ showEditModal: true });
  };

  // 編輯筆記
  handleEditTodo = (note, values) => {
    note.setTitle(values.title)
    note.setDescription(values.description)
    note.setColor(values.color)
    // this.props.onEditTodo(todo, id);
    this.setState({ showEditModal: false });
  };
  //編輯取消
  handleCancel = (e) => {
    this.setState({ showEditModal: false });
  };

  // //打開顏色Modal
  // openColorModal = (e) => {
  //   console.log("openColorModal")
  //   this.setState({ showColorModal: true });
  // };

  // //更改顏色
  // handleEditColor = (color) => {
  //   this.setState({ colors: color, showColorModal: false });
  //   console.log("TodoItem.handleColor:" + color)
  //   console.log("TodoItem.handleColors:" + this.state.colors)
  //   notification.success({
  //     message: "通知",
  //     description: "更換顏色成功",
  //     duration: 2,
  //     placemen: "topLeft",
  //   });
  // }

  // //顏色取消
  // handleColorCancel = (e) => {
  //   console.log("handleColorCancel")
  //   this.setState({ showColorModal: false });
  // };

  render() {
    const { note } = this.props;
    // console.log(note.data.color)
    const { showEditModal, showColorModal } = this.state;
    const { handleCancel,
      openEditModal, handleEditTodo, handleColorCancel, handleEditColor, formEditColor } = this
    return (
      <Card
        title={
          <span style={{ display: "flex" }}>
            <span
              style={{
                whiteSpace: "pre-wrap",
                marginLeft: "6px",
              }}
            >
              {note.data.title}
            </span>
          </span>
        }
        //card顏色
        style={{ backgroundColor: note.data.color }}
      >

        <div style={{ fontSize: 1 }}>
          提醒:
          <FieldTimeOutlined style={{ marginRight: "3px" }} />
          {moment(note.data.expiredDate).format("YYYY-MM-DD hh:mm")}

        </div>
        <div>
          <br />
          <div
            style={{
              marginBottom: "20px",
              wordWrap: "break-word",
            }}
          >
            {note.data.description}
          </div>
          <div style={{ fontSize: 1 }}>
            建立日期:
          <FieldTimeOutlined style={{ marginRight: "3px" }} />
            {moment(note.data.createDate).format("YYYY-MM-DD hh:mm")}
          </div>
          <div>
            <Row justify='start'
              gutter={0}>
              <Col flex={1}>
                <PickDate note={note} />
              </Col>
              <Col flex={1}>
                <Button2TrashNote note={note} />
              </Col>
              <Col flex={1}>
                <Button2PinNote note={note} />
              </Col>
              {/* <Col flex={1}><Button style={{ border: "0", color: "black" }} title={"協作者"} type="primary" ghost size="small" icon={<UserAddOutlined />}></Button></Col> */}
              <Col flex={1}>
                <PickColorPopover note={note} />
              </Col>
              {/* <Col flex={1}><Button style={{ border: "0", color: "black" }} title={"新增圖片"} type="primary" ghost size="small" icon={<PictureOutlined />} ></Button></Col> */}
              <Col flex={1}>
                <Button
                  style={{ border: "0" }}
                  title={"標籤"}
                  type="primary"
                  ghost
                  size="small"
                  shape={"circle"}
                  icon={isTags(this.props.note) ? <ExportOutlined /> : <ImportOutlined />}
                  onClick={(e) => {
                    e.preventDefault()
                    toggleTags(this.props.note)
                  }}
                ></Button>
              </Col>
              <Col flex={1}>
                <Button2ArchiveNote note={note} />
              </Col>
              <Col flex={1}>
                <PickTagPopover note={note} />
              </Col>
              <Col flex={1}>
                <Link to={`/tags/${note.id}`} onClick={() => {
                    updateNotes()
                  }}>
                  <VerticalAlignTopOutlined />
                </Link>
              </Col>
            </Row>
          </div>

          {/* 傳當前id、title、description、time */}
          <div style={{ position: "absolute", bottom: "3px", right: "3px", border: "" }}>
            <EditTodoModal
              visible={showEditModal}
              onEditTodo={handleEditTodo}
              onCancel={handleCancel}
              onColor={handleEditColor}
              note={note}
              id={note.id}
              title={note.data.title}
              description={note.data.description}
            />
            <Button
              type="primary"
              ghost size="small"
              icon={<EditOutlined />}
              style={{ marginLeft: "auto", border: "0" }}
              title={"編輯"} onClick={openEditModal}>
            </Button>
          </div>

        </div>
      </Card>
    )
  }
}

// export default connect(({ notes }) => ({ notes: AllNote.next }))(TodoListItem)
export default (TodoListItem)
