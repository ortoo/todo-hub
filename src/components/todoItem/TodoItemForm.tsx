import React, { useState } from "react";

import { makeStyles, TextField, Theme } from "@material-ui/core";
import { TodoItem } from "./TodoItem";

const useStyles = makeStyles((theme: Theme) => {
  return {
    titleField: {
      marginBottom: theme.spacing(2),
    },
  };
});

interface Props {
  todoItem: TodoItem;
  onChange: (updatedTodoItem: TodoItem) => void;
}

const TodoItemForm = ({ todoItem, onChange }: Props) => {
  const classes = useStyles();

  const { title, description } = todoItem;

  return (
    <>
      <TextField
        className={classes.titleField}
        fullWidth
        variant="outlined"
        label="Title"
        value={title}
        onChange={(event) => {
          onChange({ ...todoItem, title: event.target.value });
        }}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Description"
        multiline
        rowsMax={4}
        value={description}
        onChange={(event) => {
          onChange({ ...todoItem, description: event.target.value });
        }}
      />
    </>
  );
};

export default TodoItemForm;
