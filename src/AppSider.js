import React from "react";
import { Link, withRouter, matchPath } from "react-router-dom";
import { Layout } from "antd";
import {
  InboxOutlined,
  TagsOutlined,
  TagOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { getNote } from "./connector";
import { Menu } from "antd";
import { connect } from "react-redux";
// import { Row, Col } from 'antd'
const { Footer, Sider } = Layout;
const AppSider = connect(({ sider: x, tags }) => ({ ...x, tags }))((props) => {
  const { collapsed, tags, location } = props;
  const match = matchPath(location.pathname, {
    path: '/tags/:id',
    isExact: true,
  })
  return (
    <Sider collapsible collapsed={collapsed} trigger={null}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{
          flex: '1',
        }}>
          <Menu className="container" defaultSelectedKeys={["all"]}>
            <Menu.Item key="all" icon={<TagsOutlined />}>
              <Link to="/tags/all">All</Link>
            </Menu.Item>
            {tags.map((x) => {
              return (
                <Menu.Item key={x.id} icon={<TagOutlined />}>
                  <Link to={`/tags/${x.id}`}>{x.data.title}</Link>
                </Menu.Item>
              );
            })}
            <Menu.Item key="archive" icon={<InboxOutlined />}>
              <Link to="/tags/archive">Archive</Link>
            </Menu.Item>
            <Menu.Item key="trash" icon={<DeleteOutlined />}>
              <Link to="/tags/trash">Trash</Link>
            </Menu.Item>
          </Menu>
        </div>
        <div style={{
          flex: '1',
        }}>
          <Menu className='container'>
            {
              match && match.isExact &&
              getNote(match.params.id).prev.map((x) => {
                return (
                  <Menu.Item key={x.id} icon={<TagOutlined />}>
                    <Link to={`/tags/${x.id}`}>{x.data.title}</Link>
                  </Menu.Item>
                );
              })
            }
          </Menu>
        </div>
      </div>
      <Footer>Copyright (c) Group 9.</Footer>
    </Sider>
  );
});

export default withRouter(AppSider);
