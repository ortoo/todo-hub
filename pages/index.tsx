import React, { useState } from "react";

import { makeStyles, Theme } from "@material-ui/core";

import { TodoItem } from "../src/components/todoItem/TodoItemCard";
import TodoList from "../src/components/todoList/TodoList";

const useStyles = makeStyles((theme: Theme) => {
  return {};
});

const Index = () => {
  const classes = useStyles();

  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  return (
    <>
      <TodoList todoItems={todoItems}></TodoList>
    </>
  );
};

export default Index;
