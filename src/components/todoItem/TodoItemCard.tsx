import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import { TodoItem } from "./TodoItem";

interface Props {
  todoItem: TodoItem;
}

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
