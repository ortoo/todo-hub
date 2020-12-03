import React from "react";

import TextField from "@material-ui/core/TextField";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";

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

// The todo form that appears inside the create modal, could be used for edit too perhaps?
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
