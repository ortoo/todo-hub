import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import { TodoItem } from "./TodoItem";

interface Props {
  todoItem: TodoItem;
}

// The actual todo card that appears on the screen, can be expanded with buttons for different actions and such
const TodoItemCard = ({ todoItem }: Props) => {
  const { title, description } = todoItem;

  return (
    <>
      <Card variant="outlined">
        <CardHeader title={title} subheader={description}></CardHeader>
      </Card>
    </>
  );
};

export default TodoItemCard;
