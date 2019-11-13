import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import SearchInput from "./SearchInput";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

export default function MenuBar(props) {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.root}>
        <Typography variant="h6" noWrap>
          {"SPA Movies"}
        </Typography>
        <SearchInput
          handleSearch={props.handleSearch}
          setQuery={props.setQuery}
          loading={props.loading}
        />
        <IconButton
          color="inherit"
          aria-label="favorite movies"
          onClick={props.handleShowFavorites}
        >
          {props.showFavorites ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
