import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";
import { toggleSider } from "./connector";

const AppSiderButton = connect(({ sider: x }) => x)((props) => {
    const { collapsed } = props;
    return (
        <Button
            type="primary"
            shape="circle"
            icon={collapsed ? <CaretRightOutlined /> : <CaretLeftOutlined />}
            onClick={toggleSider}
            id="collapse-button"
        />
    );
});

export default AppSiderButton