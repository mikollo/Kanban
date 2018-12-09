import React, { useRef } from "react";
import { actionInterface } from "../Kanban";

export default function ListCreator(props: {
  dispatch: React.Dispatch<actionInterface>;
}) {
  const nameInputElement = useRef(null);
  const addNewList = () => {
    const input: any = nameInputElement.current;
    if (input && input.value) {
      props.dispatch({
        type: "add list",
        newListName: input.value
      });
      input.value = "";
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
