import React from "react";
import { Popover, Button } from "antd";
import data from "../data";
import TimeList from "./TimeList";
import moment from "moment";
const NoteM = data.filter(
  (todo) =>
    (todo.expiredDate.format("M") === moment().format("M") &&
      todo.expiredDate.format("D") === moment().format("D") &&
      todo.expiredDate.format("HH") >= moment().format("HH") &&
      todo.expiredDate.format("mm") >= moment().format("mm")) |
    (todo.expiredDate.format("M") === moment().format("M") &&
      parseInt(todo.expiredDate.format("D")) > parseInt(moment().format("D"))) |
    (todo.expiredDate.format("M") > moment().format("M"))
);
console.log(NoteM);
const content = (
  <div>
    <TimeList todo={NoteM} />
  </div>
);
export default () => (
  <Popover placement="bottom" content={content} trigger="click">
    <Button>提醒</Button>
  </Popover>
);