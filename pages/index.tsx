import React, { useState } from "react";

import { styled } from "@mui/material/styles";

import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";

import TodoList from "../src/components/todoItem/list/TodoList";
import CreateTodoItemDialog from "../src/components/todoItem/create/CreateTodoItemDialog";
import { TodoItem } from "../src/components/todoItem/TodoItem";

const PREFIX = "Index";

const classes = {
  todoList: `${PREFIX}-todoList`,
  createItemFab: `${PREFIX}-createItemFab`,
};

const StyledContainer = styled(Container)(({ theme }) => {
  return {
    [`& .${classes.todoList}`]: {
      marginTop: theme.spacing(2),
    },
    [`& .${classes.createItemFab}`]: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  };
});

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
    <StyledContainer>
      <TodoList className={classes.todoList} todoItems={todoItems}></TodoList>

      <Tooltip title="Create new todo item">
        <Fab
          className={classes.createItemFab}
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
    </StyledContainer>
  );
};

export default Index;
