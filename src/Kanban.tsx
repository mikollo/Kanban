import React, { useReducer } from "react";
import List from "./components/List";
import ListCreator from "./components/ListCreator";

export default function Kanban() {
  const [lists, dispatch] = useReducer(kanbanReducer, []);
  return (
    <div>
      {JSON.stringify(lists)}
      {/*  {lists.map((data, index) => (
        <List indexOfList={index} tasks={data} dispatch={dispatch} />
      ))} */}
      <ListCreator dispatch={dispatch} />
    </div>
  );
}

function kanbanReducer(state: KanbanInterface, action: actionInterface) {
  let newState = state;
  switch (action.type) {
    case "add list":
      if (action.newListName)
        newState.push({ name: action.newListName, tasks: [] });
      break;
    case "add task to list":
      if (action.indexOfList && action.newTaskData)
        newState[action.indexOfList].tasks.push(action.newTaskData);
      break;
    case "change list name":
      if (action.indexOfList && action.newListName)
        newState[action.indexOfList] = {
          name: action.newListName,
          tasks: newState[action.indexOfList].tasks
        };
      break;
    case "edit task":
      if (action.indexOfList && action.indexOfTask && action.newTaskData)
        newState[action.indexOfList].tasks[action.indexOfTask] =
          action.newTaskData;
      break;
    default:
      throw "Action doesn't have a valid type";
  }
  return newState;
}

export interface actionInterface {
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
