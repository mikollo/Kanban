import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
// this adds custom jest matchers from jest-dom
import "jest-dom/extend-expect";
import Kanban from "../Kanban";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test("List can be added", async () => {
  const { getByText, getByPlaceholderText, container } = render(<Kanban />);
  const input = getByPlaceholderText("New list name");
  (input as any).value = "Some list";
  fireEvent.change(input);
  fireEvent.click(getByText("Add new list"));
  const createdListHeader = getByText("Add new task");
  expect(createdListHeader).toBeDefined();
  expect(container).toMatchSnapshot();
});
