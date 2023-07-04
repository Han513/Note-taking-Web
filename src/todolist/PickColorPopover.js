import React from 'react'
import { Popover } from 'antd';
import { Button } from 'antd';
import { setNoteColor } from "../connector";
import {
    FormatPainterOutlined,
} from "@ant-design/icons";

const PickColorPopover = (props) => {
    const { note } = props
    return <Popover content={
        <div>
            <Button shape="circle" style={{ backgroundColor: "#FFFFFF", border: "1", color: "#FFFFFF" }} onClick={() => {
                setNoteColor(note, "#FFFFFF")
            }}>白</Button>
            <Button shape="circle" style={{ backgroundColor: "#FFD2D2", border: "1", color: "#FFD2D2" }} onClick={() => {
                setNoteColor(note, "#FFD2D2")
            }}>紅</Button>
            <Button shape="circle" style={{ backgroundColor: "#FFECF5", border: "1", color: "#FFECF5" }} onClick={() => {
                setNoteColor(note, "#FFECF5")
            }}>粉</Button>
            <Button shape="circle" style={{ backgroundColor: "#FFE6FF", border: "1", color: "#FFE6FF" }} onClick={() => {
                setNoteColor(note, "#FFE6FF")
            }}>紫</Button>
            <Button shape="circle" style={{ backgroundColor: "#F1E1FF", border: "1", color: "#F1E1FF" }} onClick={() => {
                setNoteColor(note, "#F1E1FF")
            }}>藍</Button>
            <Button shape="circle" style={{ backgroundColor: "#ECECFF", border: "1", color: "#ECECFF" }} onClick={() => {
                setNoteColor(note, "#ECECFF")
            }}>藍</Button>
            <Button shape="circle" style={{ backgroundColor: "#D2E9FF", border: "1", color: "#D2E9FF" }} onClick={() => {
                setNoteColor(note, "#D2E9FF")
            }}>藍</Button>
            <Button shape="circle" style={{ backgroundColor: "#ECFFFF", border: "1", color: "#ECFFFF" }} onClick={() => {
                setNoteColor(note, "#ECFFFF")
            }}>綠</Button>
            <Button shape="circle" style={{ backgroundColor: "#E8FFF5", border: "1", color: "#E8FFF5" }} onClick={() => {
                setNoteColor(note, "#E8FFF5")
            }}>綠</Button>
            <Button shape="circle" style={{ backgroundColor: "#DFFFDF", border: "1", color: "#DFFFDF" }} onClick={() => {
                setNoteColor(note, "#DFFFDF")
            }}>綠</Button>
            <Button shape="circle" style={{ backgroundColor: "#FFFFDF", border: "1", color: "#FFFFDF" }} onClick={() => {
                setNoteColor(note, "#FFFFDF")
            }}>黃</Button>
            <Button shape="circle" style={{ backgroundColor: "#FFE6D9", border: "1", color: "#FFE6D9" }} onClick={() => {
                setNoteColor(note, "#FFE6D9")
            }}>橘</Button>
            <Button shape="circle" style={{ backgroundColor: "#D1E9E9", border: "1", color: "#D1E9E9" }} onClick={() => {
                setNoteColor(note, "#D1E9E9")
            }}>水</Button>
            <Button shape="circle" style={{ backgroundColor: "#F0F0F0", border: "1", color: "#F0F0F0" }} onClick={() => {
                setNoteColor(note, "#F0F0F0")
            }}>灰</Button>
        </div>
    }>
        <Button
            style={{ border: "0" }}
            title={"變更顏色"}
            type="primary"
            ghost
            size="small"
            shape={"circle"}
            icon={<FormatPainterOutlined />}
        // onClick={openColorModal}
        ></Button>
    </Popover>
}

export default PickColorPopover