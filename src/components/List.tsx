import React, { useState } from "react";
import { ActionInterface, ListInterface, TaskInterface } from "../Kanban";
import EditableTask from "./EditableTask";
import TaskCreator from "./TaskCreator";
import { ListContainer, Input, ListName } from "../shared/styledComponents";

interface ListComponentInterface {
  listData: ListInterface;
  indexOfList: number;
  dispatch: React.Dispatch<ActionInterface>;
}

export default function List(props: ListComponentInterface) {
  const onListNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    props.dispatch({
      type: "change list name",
      newListName: event.currentTarget.value.slice(0, 30),
      indexOfList: props.indexOfList
    });
  };

  return (
    <>
      <ListContainer>
        <ListName onChange={onListNameChange} value={props.listData.name} />
        {props.listData.tasks.map((taskData: TaskInterface, index) => (
          <EditableTask
            taskData={taskData}
            indexOfList={props.indexOfList}
            indexOfTask={index}
            dispatch={props.dispatch}
          />
        ))}
        <TaskCreator
          indexOfList={props.indexOfList}
          dispatch={props.dispatch}
        />
      </ListContainer>
    </>
  );
}
