import React, { Component } from "react";
import { List, Radio, Button } from "antd";
import TodoListItem from "./TodoListItem";
import CreateTodoModal from "./CreateTodoModal";
import { PlusOutlined } from "@ant-design/icons";
import data from "../data";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateModal: false,
      queryType: "all",
    };
  }

  handleQueryTypeChange = (e) => {
    this.setState({ queryType: e.target.value });
  };

  handleOpenTodoModal = (e) => {
    this.setState({ showCreateModal: true });
  };

  handleCancel = (e) => {
    this.setState({ showCreateModal: false });
  };

  handleAddTodo = (todo) => {
    this.props.onAddTodo(todo);
    this.setState({ showCreateModal: false });
  };

  getTodos = () => {
    switch (this.state.queryType) {
      case "completed":
        return data.filter((todo) => todo.completed);
      case "uncompleted":
        return data.filter((todo) => !todo.completed);
      case "all":
      default:
        return data;
    }
  };

  render() {
    const {
      getTodos,
      handleQueryTypeChange,
      handleAddTodo,
      handleCancel,
      handleOpenTodoModal,
    } = this;
    const { onCompleteChange, onEditTodo } = this.props;
    const { queryType, showCreateModal } = this.state;
    return (
      <div>
        <CreateTodoModal
          visible={showCreateModal}
          onAddTodo={handleAddTodo}
          onCancel={handleCancel}
        />
        <div style={{ margin: "10px 0px", display: "flex" }}>
          {/* <Radio.Group
            value={queryType}
            buttonStyle="solid"
            onChange={handleQueryTypeChange}
          >
            <Radio.Button value="all">全部</Radio.Button>
            <Radio.Button value="completed">已完成</Radio.Button>
            <Radio.Button value="uncompleted">未完成</Radio.Button>
          </Radio.Group> */}

          <Button
            type="primary"
            icon={<PlusOutlined />}
            style={{ marginLeft: "auto" }}
            onClick={handleOpenTodoModal}
          >
            新增待辦
          </Button>
        </div>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={getTodos()}
          renderItem={(todo) => (
            <List.Item>
              <TodoListItem
                todo={todo}
                onCompleteChange={onCompleteChange}
                onEditTodo={onEditTodo}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}
