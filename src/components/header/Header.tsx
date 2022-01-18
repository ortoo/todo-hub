import React from "react";

import { styled } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const PREFIX = "Header";

const classes = {
  title: `${PREFIX}-title`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled("div")(({ theme }) => {
  return {
    [`& .${classes.title}`]: {
      flexGrow: 1,
    },
  };
});

const Header = () => {
  return (
    <Root>
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
    </Root>
  );
};

export default Header;
