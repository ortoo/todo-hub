import React, { useState } from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles";

import { TodoItem } from "./TodoItem";

const useStyles = makeStyles((theme: Theme) => {
  return {
    approve: {
      color: 'green',
      borderColor: 'green'
    },
    cancel: {
      color: 'red',
      borderColor: 'red'
    }
  };
});

interface Props {
  todoItem: TodoItem;
  handleDelete: (updatedTodoItem: TodoItem) => void;
}

// The actual todo card that appears on the screen, can be expanded with buttons for different actions and such
const TodoItemCard = ({ todoItem, handleDelete, index }: Props) => {
  const classes = useStyles();

  const { title, description } = todoItem;
  const [confirmation, setConfirmation] = useState(false);
  return (
    <>
      <Card variant="outlined">
        <CardHeader title={title} subheader={description}></CardHeader>
        <CardActions>
          {
            confirmation
              ? (
                <>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<CheckCircleIcon />}
                    onClick={() => {
                      handleDelete({ index });
                    }}
                    className={classes.approve}

                  >
                    Confirm
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<CancelIcon />}
                    onClick={() => {
                      setConfirmation(false);
                    }}
                    className={classes.cancel}

                  >
                    Cancel
                  </Button>
                </>
              )
              :
              (
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    setConfirmation(true)
                  }}
                  className={classes.cancel}

                >
                  Delete
                </Button>
              )
          }


        </CardActions>
      </Card>
    </>
  );
};

export default TodoItemCard;
