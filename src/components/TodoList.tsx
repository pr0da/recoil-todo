import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../domain/todo";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map(todoItem => (
        <TodoItem item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
