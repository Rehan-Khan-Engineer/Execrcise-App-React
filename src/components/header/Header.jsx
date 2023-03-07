import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <>
      {" "}
      <AppBar position="static" sx={{ backgroundColor: "#161b22" }}>
        <Toolbar variant="dense">
          <Typography variant="h5" color="inherit" component="div">
            Most Starred Repos on GitHub (with infinite scroll)
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
