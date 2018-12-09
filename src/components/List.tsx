import React from "react";
import Task from "./Task";

export default ({ tasks }) => (
  <div>
    <Task title="" description="" />
    {tasks.map(({ title, description }) => (
      <Task title={title} description={description} />
    ))}
  </div>
);
