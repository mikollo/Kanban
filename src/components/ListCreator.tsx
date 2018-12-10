import React, { useRef } from "react";
import { ActionInterface } from "../Kanban";
import { ListContainer, Button, Input } from "../shared/styledComponents";

export default function ListCreator(props: {
  dispatch: React.Dispatch<ActionInterface>;
}) {
  const nameInputElement = useRef(null);
  const addNewList = () => {
    const input: HTMLInputElement | null = nameInputElement.current;
    props.dispatch({
      type: "add list",
      newListName: input!.value.slice(0, 30)
    });
    input!.value = "";
  };
  return (
    <ListContainer>
      <Input
        ref={nameInputElement}
        type="text"
        name="lol"
        placeholder="New list name"
      />
      <Button onClick={addNewList}>Add new list</Button>
    </ListContainer>
  );
}
