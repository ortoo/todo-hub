import React from "react";

import { makeStyles, Theme } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles((theme: Theme) => {
  return {};
});

export interface TodoItem {
  name: string;
  description: string;
}

interface Props {
  todoItem: TodoItem;
}

const TodoItemCard = ({ todoItem }: Props) => {
  const classes = useStyles();

  const { name, description } = todoItem;

  return (
    <>
      <Card>
        <CardHeader title={name} subheader={description}></CardHeader>
      </Card>
    </>
  );
};

export default TodoItemCard;
