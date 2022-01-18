import React, { useState } from "react";

import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";

import TodoList from "../src/components/todoItem/list/TodoList";
import CreateTodoItemDialog from "../src/components/todoItem/create/CreateTodoItemDialog";
import { TodoItem } from "../src/components/todoItem/TodoItem";

// this is the main page of the application, it is not expected that you would need another page
const Index = () => {
  // the "saved" todo items that will display to the user.
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  const [createTodoDialogOpen, setCreateTodoDialogOpen] = useState(false);

  // this function shows how to safely mutate a state, in this case adding an item
  const addTodoItem = (todoItem) => {
    // append the new todo to the end of the todo list
    setTodoItems((oldItems) => {
      return [...oldItems, todoItem];
    });
    setCreateTodoDialogOpen(false);
  };

  return (
    <Container>
      <TodoList sx={{ mt: 2 }} todoItems={todoItems}></TodoList>
      <Tooltip title="Create new todo item">
        <Fab
          sx={(theme) => ({
            position: "absolute",
            bottom: theme.spacing(2),
            right: theme.spacing(2),
          })}
          onClick={() => setCreateTodoDialogOpen(true)}
          color="primary"
        >
          <AddIcon color="secondary" />
        </Fab>
      </Tooltip>
      <CreateTodoItemDialog
        open={createTodoDialogOpen}
        onCloseRequest={() => setCreateTodoDialogOpen(false)}
        onSave={addTodoItem}
      ></CreateTodoItemDialog>
    </Container>
  );
};

export default Index;
