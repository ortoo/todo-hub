import React, { useState } from "react";

import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import { TodoItem } from "../TodoItem";
import TodoItemForm from "../TodoItemForm";
import TodoValidationAlert from "../todoValidationAlert/TodoValidationAlert"

// we extend DialogProps so that we can change and access the normal dialog properties when calling this component
interface Props extends DialogProps {
  onSave: (newTodoItem: TodoItem) => void;
  onCloseRequest: () => void;
}

// Dialog wrapper for creating a to do
const CreateTodoItemDialog = ({
  onSave,
  onCloseRequest,
  open,
  ...other
}: Props) => {
  // useState is used to remember the state of objects between component renders in react
  const [todoItem, setTodoItem] = useState<TodoItem>({
    title: "",
    description: "",
  });

  return (
    <>
      <Dialog
        open={open}
        // When the dialog is closing, reset the data for the form
        onExiting={() => setTodoItem({ title: "", description: "" })}
        {...other}
      >
        <DialogTitle>Create a new todo item</DialogTitle>
        <DialogContent>
          <TodoItemForm
            todoItem={todoItem}
            onChange={(updatedTodoItem) => setTodoItem(updatedTodoItem)}
          ></TodoItemForm>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => onCloseRequest()}>Close</Button>
          <Button
            color="primary"
            onClick={() => onSave(todoItem)}
            // Until both boxes contain anyting other than an empty string *i.e. if both boxes are empty* the UI dissables the save button
            disabled={todoItem.description === "" || todoItem.title === ""}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateTodoItemDialog;
