import React, { useState } from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';
import TaskComplete from '@material-ui/icons/AssignmentTurnedIn';
import UndoIcon from '@material-ui/icons/Replay';

import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles";

import { TodoItem } from "./TodoItem";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => {
  return {
    link: {
      color: 'DarkSlateGray',
      paddingLeft: theme.spacing(1),
      fontSize: 4
    },
    doneButton: {
      color: 'green',
      borderColor: 'green',
      width: '100%',
    },
    confirmButton: {
      color: 'green',
      borderColor: 'green',
      width: '50%',
    },
    deleteButton: {
      color: 'red',
      borderColor: 'red',
      width: '50%',
    },
    edit: {
      color: 'blue',
      borderColor: 'blue',
      width: '50%',
    },
    completeHeader: {
      backgroundColor: 'rgba(30, 130, 76, 0.5)',
      paddingLeft: theme.spacing(1)
    },
    completeCard: {
      backgroundColor: 'rgba(30, 130, 76, 0.1)',
    },
    inProgressCard: {
      backgroundColor: 'rgba(235, 149, 50, 0.1)',
    },
    inProgressHeader: {
      backgroundColor: 'rgba(235, 149, 50, 0.5)',
      paddingLeft: theme.spacing(1)
    },
  };
});

interface Props {
  todoItem: TodoItem;
  index: Number;
  handleDelete: (updatedTodoItem: TodoItem) => void;
  handleEdit: (updatedTodoItem: TodoItem) => void;
  handleTaskComplete: (updatedTodoItem: TodoItem) => void;
  handleTaskInComplete: (updatedTodoItem: TodoItem) => void;
}

// The actual todo card that appears on the screen, can be expanded with buttons for different actions and such
const TodoItemCard = ({ todoItem, handleDelete, handleEdit, handleTaskComplete, handleTaskInComplete, index }: Props) => {
  const classes = useStyles();
  const { title, description, isComplete } = todoItem;
  const [confirmation, setConfirmation] = useState(false);
  return (
    <>
      <Card variant="outlined" className={isComplete ? classes.completeCard : classes.inProgressCard}>
        <Paper className={isComplete ? classes.completeHeader : classes.inProgressHeader}>
          <FormControlLabel
            control={<Checkbox checked={isComplete}
              disableRipple={true}
              color="secondary"
              name="checkedA" />}
            label={isComplete ? 'Complete!' : 'Active...'}
          />
        </Paper>
        <CardHeader title={title} subheader={description}></CardHeader>
        <CardActions>
          {
            isComplete ? (
              <FormControlLabel
                onClick={() => handleTaskInComplete({index})}
                className={classes.link}
                control={
                  <UndoIcon fontSize="small" />
                }
                label={
                  <Typography variant="body2">
                    Return task to 'in progress'
                  </Typography>
                }
              />
            ) : (
                confirmation
                  ? (
                    <Box>
                      <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<CheckCircleIcon />}
                        onClick={() => {
                          setConfirmation(false);
                          handleDelete({ index });
                        }}
                        className={classes.confirmButton}
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
                        className={classes.deleteButton}
                      >
                        Cancel
                    </Button>
                    </Box>
                  )
                  :
                  (
                    <Box>
                      <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<DeleteIcon />}
                        onClick={() => {
                          setConfirmation(true)
                        }}
                        className={classes.deleteButton}
                      >
                        Delete
                  </Button>
                      <Button
                        variant="outlined"
                        className={classes.edit}
                        startIcon={<EditIcon />}
                        onClick={() => {
                          handleEdit({ index });
                        }}
                      >
                        Edit
                  </Button>
                      <Button
                        variant="outlined"
                        startIcon={<TaskComplete />}
                        onClick={() => handleTaskComplete({index})}
                        className={classes.doneButton}
                      >
                        Done
                  </Button>
                    </Box>
                  )
              )
          }
        </CardActions>
      </Card>
    </>
  );
};

export default TodoItemCard;
