import React, { useState } from "react";

import { makeStyles, Theme } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";

import TodoList from "../src/components/todoList/TodoList";
import CreateTodoItemDialog from "../src/components/todoItem/create/CreateTodoItemDialog";
import { TodoItem } from "../src/components/todoItem/TodoItem";
import Container from "@material-ui/core/Container";

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

const Index = () => {
  const classes = useStyles();

  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  const [createTodoDialogOpen, setCreateTodoDialogOpen] = useState(false);

  const addTodoItem = (todoItem) => {
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
