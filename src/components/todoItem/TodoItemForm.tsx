import React from "react";

import { styled } from "@mui/material/styles";

import TextField from "@mui/material/TextField";

import { TodoItem } from "./TodoItem";

const PREFIX = "TodoItemForm";

const classes = {
  titleField: `${PREFIX}-titleField`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled("div")(({ theme }) => {
  return {
    [`& .${classes.titleField}`]: {
      marginTop: theme.spacing(1),
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
  const { title, description } = todoItem;

  return (
    <Root>
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
        maxRows={4}
        value={description}
        onChange={(event) => {
          onChange({ ...todoItem, description: event.target.value });
        }}
      />
    </Root>
  );
};

export default TodoItemForm;
