import React, { useState } from "react";
import { ActionInterface, ListInterface } from "../Kanban";

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
    </div>
  );
}
