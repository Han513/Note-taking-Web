import React from "react";
import Time from "./Time";

function TimeList(props) {
  return (
    (
      <div >
     
          {props.todo.map((todos) => (
            <Time todo={todos} />
          ))}
      
      </div>
    )
  );
}
export default TimeList;