import React, { useState } from "react";

import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import TodoItemForm from "../TodoItemForm";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TodoItem } from "../TodoItem";
import { DialogTitle } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => {
  return {};
});

interface Props extends DialogProps {
  onSave: (newTodoItem: TodoItem) => void;
  onCloseRequest: () => void;
}

const CreateTodoItemDialog = ({
  onSave,
  onCloseRequest,
  open,
  ...other
}: Props) => {
  const classes = useStyles();

  const [todoItem, setTodoItem] = useState<TodoItem>({
    title: "",
    description: "",
  });

  return (
    <>
      <Dialog open={open} onExiting={() => onCloseRequest()} {...other}>
        <DialogTitle>Create a new todo item</DialogTitle>
        <DialogContent>
          <TodoItemForm
            todoItem={todoItem}
            onChange={(updatedTodoItem) => setTodoItem(updatedTodoItem)}
          ></TodoItemForm>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => onCloseRequest()}>Close</Button>
          <Button onClick={() => onSave(todoItem)}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateTodoItemDialog;
