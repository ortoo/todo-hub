import React from "react";

import TextField from "@mui/material/TextField";

import { TodoItem } from "./TodoItem";

interface Props {
  todoItem: TodoItem;
  onChange: (updatedTodoItem: TodoItem) => void;
}

// The todo form that appears inside the create modal, could be used for edit too perhaps?
const TodoItemForm = ({ todoItem, onChange }: Props) => {
  const { title, description } = todoItem;

  return (
    <>
      <TextField
        sx={{ mt: 1, mb: 2 }}
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
        maxRows={4}
        value={description}
        onChange={(event) => {
          onChange({ ...todoItem, description: event.target.value });
        }}
      />
    </>
  );
};

export default TodoItemForm;
