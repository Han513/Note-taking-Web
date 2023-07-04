import React from "react";
import { Layout } from "antd";
import { Row, Col } from "antd";
import TheEditor from "./TheEditor";
import AppSider from "./AppSider";
import AppSiderButton from "./AppSiderButton";
import NoteListSwitch from './NoteListSwitch'
import "./App.css";
import { Link, withRouter, Route, Switch } from "react-router-dom";
import Reminder from "./reminder"
import logo from "./logo.jpg"
const { Header, Content } = Layout;

const App = (props) => (
  <Layout id="layout">
    <Header id="header">
      <Row gutter={0}>
        <Col flex={2}>
          <AppSiderButton />
        </Col>
        <Col flex={80}>
          <div id="a"><img src={logo} className="logo"></img></div>
          
        </Col>
        <Col flex={10}>
           <div id="b"><Reminder /></div>
        </Col>
      </Row>
    </Header>
    <Layout>
      <AppSider />
      <Content id="content">
        <NoteListSwitch />
      </Content>
    </Layout>
  </Layout>
);

export default withRouter(App);
