import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import TodoList from "./todolist/TodoList";
import { AllNote, ArchiveNote, TrashNote } from "./connector";
const NoteListSwitch = (props) => {
  const { tags } = props;
  return (
    <>
      <Switch>
        {[AllNote, ...AllNote.next, ArchiveNote, TrashNote].map((x) => {
          return (
            <Route key={x.id} exact path={`/tags/${x.id}`}>
              <TodoList tag={x} />
            </Route>
          );
        })}
      </Switch>
    </>
  );
};
const state2props = ({ tags }) => ({ tags });
export default connect(state2props)(NoteListSwitch);
