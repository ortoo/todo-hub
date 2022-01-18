import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Header = () => {
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Container disableGutters>
          <Toolbar>
            <Typography variant="h6" color="secondary" sx={{ flexGrow: 1 }}>
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
