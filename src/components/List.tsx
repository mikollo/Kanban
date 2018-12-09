import React, { useState } from "react";
import { ActionInterface, ListInterface, TaskInterface } from "../Kanban";
import EditableTask from "./EditableTask";
import TaskCreator from "./TaskCreator";

export default function List(props: {
  listData: ListInterface;
  indexOfList: number;
  dispatch: React.Dispatch<ActionInterface>;
}) {
  const [inputError, setInputError] = useState("");
  const onListNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.dispatch({
      type: "change list name",
      newListName: event.currentTarget.value.slice(0, 30),
      indexOfList: props.indexOfList
    });
    setInputError(
      event.currentTarget.value ? "" : "The list name cannot be empty"
    );
  };
  return (
    <div>
      {inputError}
      <input onChange={onListNameChange} value={props.listData.name} />
      {props.listData.tasks.map((taskData: TaskInterface, index) => (
        <EditableTask
          taskData={taskData}
          indexOfList={props.indexOfList}
          indexOfTask={index}
          dispatch={props.dispatch}
        />
      ))}
      <TaskCreator indexOfList={props.indexOfList} dispatch={props.dispatch} />
    </div>
  );
}
