import React, { useState } from "react";

import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Container from "@material-ui/core/Container";

import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles";

import TodoList from "../src/components/todoItem/list/TodoList";
import CreateTodoItemDialog from "../src/components/todoItem/create/CreateTodoItemDialog";
import { TodoItem } from "../src/components/todoItem/TodoItem";

const useStyles = makeStyles((theme: Theme) => {
  return {
    todoList: {
      marginTop: theme.spacing(2),
    },
    createItemFab: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  };
});

// this is the main page of the application, it is not expected that you would need another page
const Index = () => {
  const classes = useStyles();

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
    </Container>
  );
};

export default Index;
