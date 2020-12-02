import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Container, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => {
  return {};
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary">
      <Container disableGutters>
        <Toolbar></Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
