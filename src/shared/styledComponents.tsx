import styled, { createGlobalStyle } from "styled-components";

// theme
const gray = "#505050";
const blue = "#137abe";
const lightGray = "#f3f3f3";
const darkGray = "#d2d2d2";
const buttonPadding = 10;
const biggerMargin = 30;
const smallerMargin = 5;
const fontSize = 14;
const borderRadius = 4;

const GlobalStyle = createGlobalStyle`
body {
    touch-action: manipulation;
    margin: 0;
    padding: 0px;
    background-color:${darkGray};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
`;

const KanbanWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  flex-direction: row;
`;

const Input = styled.input`
  width: 100%;
  background-color: ${lightGray};
  border: none;
  padding: ${buttonPadding}px;
  border-radius: ${borderRadius}px;
  font-size: ${fontSize}px;
  outline: none;
  text-transform: capitalize;
  margin: ${smallerMargin}px 0px;
`;

const ListName = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  font-weight: 700;
  padding: 0px;
  text-transform: capitalize;
  font-size: ${fontSize * 1.5}px;
  outline: none;
  margin: ${smallerMargin}px 0px;
`;

const ListContainer = styled.div`
  display: flex;
  width: 25vw;
  flex-direction: column;
  height: 100%;
  margin: ${buttonPadding}px;
`;

const Button = styled.button`
  text-decoration: none;
  color: white;
  padding: ${buttonPadding}px;
  font-size: ${fontSize}px;
  background-color: ${blue};
  border-radius: ${borderRadius}px;
  display: flex;
  outline: none;
  border: none;
  width: 100%;
  justify-content: center;
  margin: ${smallerMargin}px 0px;
`;

const TaskWrapper = styled.div`
  padding: ${smallerMargin}px ${smallerMargin * 1.5}px;
  background-color: #dedede;
  border-radius: 5px;
  margin: ${buttonPadding}px 0px;
`;

export {
  ListName,
  TaskWrapper,
  Button,
  KanbanWrapper,
  ListContainer,
  Input,
  GlobalStyle
};
