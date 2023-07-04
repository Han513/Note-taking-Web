import React, { Component } from "react";
import { Modal,Button} from "antd";

export default class EditColorModal extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      colors:""
    }
  }

  handleCancel = (e) => {
    this.props.onCancel();
  };

  //改顏色
  handleColorChange=(e)=>{
    e.preventDefault();
    console.log("handleColorChange:"+this.state.colors)
    this.props.onColor(this.state.colors) //#FFD2D2
  }
  //儲存顏色
  handleRememberColor=(colStr)=>{
    this.setState(({colors})=>{
      console.log("color from: "+colors)
      console.log("color to: "+colStr)
      return {colors:colStr}
    })
  }

  render() {
    const {handleCancel,handleColorChange,handleRememberColor} = this;
    const {visible} = this.props;

    return (
      <Modal
        title={"Choose Color"}
        visible={visible}
        okText="更換"
        cancelText="返回"
        onOk={handleColorChange}
        onCancel={handleCancel}
        destroyOnClose={true}
        centered
      >
          <Button shape="circle" style={{backgroundColor:"#FFFFFF",border:"1",color:"#FFFFFF"}} onClick={()=>handleRememberColor("#FFFFFF")}>白</Button>
          <Button shape="circle" style={{backgroundColor:"#FFD2D2",border:"1",color:"#FFD2D2"}} onClick={()=>handleRememberColor("#FFD2D2")}>紅</Button>
          <Button shape="circle" style={{backgroundColor:"#FFECF5",border:"1",color:"#FFECF5"}} onClick={()=>handleRememberColor("#FFECF5")}>粉</Button>
          <Button shape="circle" style={{backgroundColor:"#FFE6FF",border:"1",color:"#FFE6FF"}} onClick={()=>handleRememberColor("#FFE6FF")}>紫</Button>
          <Button shape="circle" style={{backgroundColor:"#F1E1FF",border:"1",color:"#F1E1FF"}} onClick={()=>handleRememberColor("#F1E1FF")}>藍</Button>
          <Button shape="circle" style={{backgroundColor:"#ECECFF",border:"1",color:"#ECECFF"}} onClick={()=>handleRememberColor("#ECECFF")}>藍</Button>
          <Button shape="circle" style={{backgroundColor:"#D2E9FF",border:"1",color:"#D2E9FF"}} onClick={()=>handleRememberColor("#D2E9FF")}>藍</Button>
          <Button shape="circle" style={{backgroundColor:"#ECFFFF",border:"1",color:"#ECFFFF"}} onClick={()=>handleRememberColor("#ECFFFF")}>綠</Button>
          <Button shape="circle" style={{backgroundColor:"#E8FFF5",border:"1",color:"#E8FFF5"}} onClick={()=>handleRememberColor("#E8FFF5")}>綠</Button>
          <Button shape="circle" style={{backgroundColor:"#DFFFDF",border:"1",color:"#DFFFDF"}} onClick={()=>handleRememberColor("#DFFFDF")}>綠</Button>
          <Button shape="circle" style={{backgroundColor:"#FFFFDF",border:"1",color:"#FFFFDF"}} onClick={()=>handleRememberColor("#FFFFDF")}>黃</Button>
          <Button shape="circle" style={{backgroundColor:"#FFE6D9",border:"1",color:"#FFE6D9"}} onClick={()=>handleRememberColor("#FFE6D9")}>橘</Button>
          <Button shape="circle" style={{backgroundColor:"#D1E9E9",border:"1",color:"#D1E9E9"}} onClick={()=>handleRememberColor("#D1E9E9")}>水</Button>
          <Button shape="circle" style={{backgroundColor:"#F0F0F0",border:"1",color:"#F0F0F0"}} onClick={()=>handleRememberColor("#F0F0F0")}>灰</Button>
      </Modal>

    );
  }
}
