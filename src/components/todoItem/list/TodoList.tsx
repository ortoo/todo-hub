import React from "react";

import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { SxProps, Theme } from "@mui/material/styles";

import WarningIcon from "@mui/icons-material/Warning";

import { TodoItem } from "../TodoItem";
import TodoItemCard from "../TodoItemCard";

interface Props {
  sx?: SxProps<Theme>;
  todoItems: TodoItem[];
}

// This component renders the list of todo items as well as anything else in the context of a todo list
const TodoList = ({ sx = [], todoItems }: Props) => {
  const todoItemsCount = todoItems?.length || 0;

  return (
    <Box sx={Array.isArray(sx) ? sx : [sx]}>
      {todoItemsCount > 0 ? (
        <ListSubheader>{`You have ${todoItemsCount} thing${
          todoItemsCount === 1 ? "" : "s"
        }  to do`}</ListSubheader>
      ) : (
        <Box sx={{ padding: 2, textAlign: "center" }}>
          <WarningIcon color="error" sx={{ fontSize: "50px" }}></WarningIcon>
          <Typography variant="subtitle1" color="textSecondary">
            You have nothing to do, click the add button in the bottom right to
            get started
          </Typography>
        </Box>
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
    </Box>
  );
};

export default TodoList;
