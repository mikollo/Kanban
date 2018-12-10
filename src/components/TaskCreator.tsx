import React, { useRef } from "react";
import { ActionInterface } from "../Kanban";
import { Button, Input, TaskWrapper } from "../shared/styledComponents";

export default function TaskCreator(props: {
  indexOfList: number;
  dispatch: React.Dispatch<ActionInterface>;
}) {
  const titleInputElement = useRef(null);
  const descriptionInputElement = useRef(null);
  const addNewTask = () => {
    const titleInput: HTMLInputElement | null = titleInputElement.current;
    const descriptionInput: HTMLInputElement | null =
      descriptionInputElement.current;
    props.dispatch({
      type: "add task to list",
      indexOfList: props.indexOfList,
      newTaskData: {
        title: titleInput!.value,
        description: descriptionInput!.value
      }
    });
    titleInput!.value = "";
    descriptionInput!.value = "";
  };

  return (
    <TaskWrapper>
      <Input ref={titleInputElement} placeholder="Title" />
      <Input ref={descriptionInputElement} placeholder="Description" />
      <Button onClick={addNewTask}>Add new task</Button>
    </TaskWrapper>
  );
}
