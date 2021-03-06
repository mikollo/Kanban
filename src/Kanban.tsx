import React, { useReducer } from "react";
import List from "./components/List";
import ListCreator from "./components/ListCreator";
import { GlobalStyle, KanbanWrapper } from "./shared/styledComponents";

export default function Kanban() {
  const [lists, dispatch] = useReducer(kanbanReducer, []);

  return (
    <KanbanWrapper>
      {lists.map((listData, index) => (
        <List
          key={index}
          indexOfList={index}
          listData={listData}
          dispatch={dispatch}
        />
      ))}
      <ListCreator dispatch={dispatch} />
      <GlobalStyle />
    </KanbanWrapper>
  );
}

export function kanbanReducer(state: KanbanInterface, action: ActionInterface) {
  const newState = [...state];
  switch (action.type) {
    case "add list":
      newState.push({ name: action.newListName!, tasks: [] });
      break;
    case "add task to list":
      newState[action.indexOfList!].tasks.push(action.newTaskData!);
      break;
    case "change list name":
      newState[action.indexOfList!] = {
        name: action.newListName!,
        tasks: newState[action.indexOfList!].tasks
      };
      break;
    case "edit task":
      newState[action.indexOfList!].tasks[
        action.indexOfTask!
      ] = action.newTaskData!;
      break;
    default:
      throw new Error("Action doesn't have a valid type");
  }
  return newState;
}

export interface ActionInterface {
  type: "add list" | "add task to list" | "change list name" | "edit task";
  newListName?: string;
  newTaskData?: TaskInterface;
  indexOfList?: number;
  indexOfTask?: number;
}

export type KanbanInterface = ListInterface[];

export interface ListInterface {
  name: string;
  tasks: TaskInterface[];
}

export interface TaskInterface {
  title: string;
  description: string;
}
