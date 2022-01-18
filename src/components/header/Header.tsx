import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Theme } from "@mui/material/styles";

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => {
  return {
    title: {
      flexGrow: 1,
    },
  };
});

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Container disableGutters>
          <Toolbar>
            <Typography
              variant="h6"
              color="secondary"
              className={classes.title}
            >
              TodoHub
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
