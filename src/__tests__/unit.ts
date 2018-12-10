import { kanbanReducer } from "../Kanban";

const sampleState = [
  {
    name: "Some list",
    tasks: []
  }
];

test("List can be added", async () => {
  expect(
    kanbanReducer([], { type: "add list", newListName: "Some list" })
  ).toEqual(sampleState);
});

test("Task can be added", async () => {
  expect(
    kanbanReducer(sampleState, {
      type: "add task to list",
      indexOfList: 0,
      newTaskData: { title: "Some title", description: "Some description" }
    })
  ).toEqual([
    {
      name: "Some list",
      tasks: [{ title: "Some title", description: "Some description" }]
    }
  ]);
});
