import React from "react";
import moment from "moment";
function Time(props) {
  moment.relativeTimeThreshold("m", 525600);
  const { title, expiredDate } = props.todo;
  const newe = moment(expiredDate.format("YYYY-MM-DD HH:mm")).fromNow();
  const numArrray = newe.split(" ");
  var reciprocal = "";
  var num = parseInt(numArrray[1]);
  do {
    if (num > 518400) {
      reciprocal = reciprocal + parseInt(num / 518400) + "年";
      num = num % 518400;
    } else if (num > 43200) {
      reciprocal = reciprocal + parseInt(num / 43200) + "個月 ";
      num = num % 43200;
    } else if (num > 1440) {
      reciprocal = reciprocal + parseInt(num / 1440) + "天 ";
      num = num % 1440;
    } else if (num > 60) {
      reciprocal = reciprocal + parseInt(num / 60) + "小時 ";
      num = num % 60;
    } else {
      reciprocal = reciprocal + parseInt(num) + "分";
      break;
    }
  } while (num > 0);

  return (
    <div style={{ whiteSpace: "nowrap" }}>
      {title}
      <br />
      距離倒數日還有{reciprocal}
      <br />
    </div>
  );
}
export default Time;