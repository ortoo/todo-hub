import React from "react";

import { makeStyles, Theme } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { TodoItem } from "./TodoItem";

const useStyles = makeStyles((theme: Theme) => {
  return {};
});

interface Props {
  todoItem: TodoItem;
}

const TodoItemCard = ({ todoItem }: Props) => {
  const classes = useStyles();

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
