import { BackdropProps } from "@material-ui/core";

// the shape of a todo item
export interface TodoItem {
  title: string;
  description: string;
  isComplete: Boolean;
}
