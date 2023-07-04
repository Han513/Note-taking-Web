import React from "react";
import { Button, Popover, DatePicker } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { updateNotes } from "../connector";
// import { setexpiredDate } from "../connector";

const PickDate = (props) => {
  const { note } = props;
  const { expiredDate } = "";
  return (
    <Popover
      content={
        <div>
          <DatePicker
            showTime={{ format: "HH:mm" }}
            format="YYYY-MM-DD HH:mm"
            onChange={(date, dateString)=>{
              note.setExpiredData(dateString)
              updateNotes()
            }}
          />
        </div>
      }
    >
      <Button
        style={{ border: "0" }}
        title={"變更顏色"}
        type="primary"
        ghost
        size="small"
        shape={"circle"}
        icon={<BellOutlined />}
        // onClick={openColorModal}
      ></Button>
    </Popover>
  );
};

export default PickDate;
