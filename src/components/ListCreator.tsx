import React, { useRef } from "react";

export default function ListCreator() {
  const nameInputElement = useRef(null);
  return (
    <div>
      <input ref={nameInputElement} type="text" name="New list name" />
      <button
        onClick={() =>
          props.dispatch({
            type: "add task to list",
            indexOfList: props.indexOfList
          })
        }
      >
        Add new list
      </button>
    </div>
  );
}
