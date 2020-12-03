import React from "react";

import {
  ListSubheader,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";

import TodoItemCard from "../todoItem/TodoItemCard";
import Grid from "@material-ui/core/Grid";
import { TodoItem } from "../todoItem/TodoItem";
import WarningIcon from "@material-ui/icons/Warning";

const useStyles = makeStyles((theme: Theme) => {
  return {
    noTodos: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
    warningIcon: {
      fontSize: "50px",
    },
  };
});

interface Props {
  className: string;
  todoItems: TodoItem[];
}

const TodoList = ({ className, todoItems }: Props) => {
  const classes = useStyles();

  const todoItemsCount = todoItems?.length || 0;

  return (
    <div className={className}>
      {todoItemsCount > 0 ? (
        <ListSubheader>{`You have ${todoItemsCount} thing${
          todoItemsCount === 1 ? "" : "s"
        }  to do`}</ListSubheader>
      ) : (
        <div className={classes.noTodos}>
          <WarningIcon
            color="error"
            className={classes.warningIcon}
          ></WarningIcon>
          <Typography variant="subtitle1" color="textSecondary">
            You have nothing to do, click the add button in the bottom right to
            get started
          </Typography>
        </div>
      )}
      <Grid container spacing={2}>
        {todoItems.map((todoItem, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <TodoItemCard todoItem={todoItem}></TodoItemCard>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default TodoList;
