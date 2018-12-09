import React, { useRef } from "react";
import { ActionInterface } from "../Kanban";

export default function ListCreator(props: {
  dispatch: React.Dispatch<ActionInterface>;
}) {
  const nameInputElement = useRef(null);
  const addNewList = () => {
    const input: HTMLInputElement | null = nameInputElement.current;
    if (input!.value) {
      props.dispatch({
        type: "add list",
        newListName: input!.value.slice(0, 30)
      });
      input!.value = "";
    } else {
      alert("Please enter list name");
    }
  };
  return (
    <div>
      <input
        ref={nameInputElement}
        type="text"
        name="lol"
        placeholder="New list name"
      />
      <button onClick={addNewList}>Add new list</button>
    </div>
  );
}
