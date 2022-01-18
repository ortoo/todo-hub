import React from "react";

import { styled } from "@mui/material/styles";

import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import WarningIcon from "@mui/icons-material/Warning";

import { TodoItem } from "../TodoItem";
import TodoItemCard from "../TodoItemCard";

const PREFIX = "TodoList";

const classes = {
  noTodos: `${PREFIX}-noTodos`,
  warningIcon: `${PREFIX}-warningIcon`,
};

const Root = styled("div")(({ theme }) => {
  return {
    [`& .${classes.noTodos}`]: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
    [`& .${classes.warningIcon}`]: {
      fontSize: "50px",
    },
  };
});

interface Props {
  className: string;
  todoItems: TodoItem[];
}

// This component renders the list of todo items as well as anything else in the context of a todo list
const TodoList = ({ className, todoItems }: Props) => {
  const todoItemsCount = todoItems?.length || 0;

  return (
    <Root className={className}>
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
    </Root>
  );
};

export default TodoList;
