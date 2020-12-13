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

  const [prvTodoItem, setPrvTodoItem] = useState([]);
  const [createTodoDialogOpen, setCreateTodoDialogOpen] = useState(false);
  const [editTodoDialogOpen, setEditTodoDialogOpen] = useState(false);

  // this function shows how to safely mutate a state, in this case adding an item
  const addTodoItem = (todoItem) => {
    // append the new todo to the end of the todo list
    setTodoItems((oldItems) => {
      return [...oldItems, todoItem];
    });
    setCreateTodoDialogOpen(false);
  };
  // this function uses basic filtering in javascript to remove an object with the desired index
  const removeTodoItem = (index) => {
    const reducedArr = todoItems.filter((item, itemIndex) => {
      return itemIndex !== index.index
    })
    setTodoItems(reducedArr)
  };
  // this function searches for the index of the etited file and replaces it using original add/remove functions
  const editTodoItem = (todoItem) => {
    const findItemIndex = todoItems.findIndex((d, i) => (d === prvTodoItem))
    removeTodoItem({index: findItemIndex});
    addTodoItem(todoItem);
    setEditTodoDialogOpen(false)
  };
  return (
    <Container>
      <TodoList
        className={classes.todoList}
        todoItems={todoItems}
        handleDelete={removeTodoItem}
        handleEdit={(index) => {
          setPrvTodoItem(todoItems[index.index])
          setEditTodoDialogOpen(true)
        }}
      ></TodoList>
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
        title="Create a new todo item"
        open={createTodoDialogOpen}
        onCloseRequest={() => setCreateTodoDialogOpen(false)}
        onSave={addTodoItem}
      ></CreateTodoItemDialog>
      <CreateTodoItemDialog
        title="Edit an existing todo item"
        prvToDoItem={prvTodoItem}
        open={editTodoDialogOpen}
        onCloseRequest={() => setEditTodoDialogOpen(false)}
        onSave={editTodoItem}
      ></CreateTodoItemDialog>
    </Container>
  );
};

export default Index;
