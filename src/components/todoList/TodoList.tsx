import React from "react";

import { makeStyles, Theme } from "@material-ui/core";

import TodoItemCard, { TodoItem } from "../todoItem/TodoItemCard";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) => {
  return {};
});

interface Props {
  todoItems: TodoItem[];
}

const TodoList = ({ todoItems }: Props) => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2}>
        {todoItems.map((todoItem, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <TodoItemCard todoItem={todoItem}></TodoItemCard>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default TodoList;
