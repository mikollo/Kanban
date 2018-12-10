import React, { useRef } from "react";
import { TaskInterface, ActionInterface } from "../Kanban";
import { Input, TaskWrapper } from "../shared/styledComponents";

export default function EditableTask(props: {
  taskData: TaskInterface;
  indexOfList: number;
  indexOfTask: number;
  dispatch: React.Dispatch<ActionInterface>;
}) {
  const titleInputElement = useRef(null);
  const descriptionInputElement = useRef(null);
  const onChange = () => {
    const titleInput: HTMLInputElement | null = titleInputElement.current;
    const descriptionInput: HTMLInputElement | null =
      descriptionInputElement.current;
    props.dispatch({
      type: "edit task",
      indexOfList: props.indexOfList,
      indexOfTask: props.indexOfTask,
      newTaskData: {
        title: titleInput!.value,
        description: descriptionInput!.value
      }
    });
    if (titleInput!.value === "") {
      alert("The title cannot be empty");
    }
  };

  return (
    <TaskWrapper>
      <Input
        ref={titleInputElement}
        onChange={onChange}
        value={props.taskData.title}
        placeholder="Title"
      />
      <Input
        ref={descriptionInputElement}
        onChange={onChange}
        value={props.taskData.description}
        placeholder="Description"
      />
    </TaskWrapper>
  );
}
