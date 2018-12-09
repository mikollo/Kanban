import React, { useRef } from "react";
import { ActionInterface } from "../Kanban";

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
    if (titleInput!.value === "") {
      alert("The title cannot be empty");
    } else {
      props.dispatch({
        type: "add task to list",
        indexOfList: props.indexOfList,
        newTaskData: {
          title: titleInput!.value,
          description: descriptionInput!.value
        }
      });
    }
  };

  return (
    <div>
      <input ref={titleInputElement} placeholder="Title" />
      <input ref={descriptionInputElement} placeholder="Description" />
      <button onClick={addNewTask}>Add new task</button>
    </div>
  );
}
