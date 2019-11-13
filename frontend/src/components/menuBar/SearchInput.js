import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";

import InputBase from "@material-ui/core/InputBase";

import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  search: {
    display: "flex",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    padding: theme.spacing(0.2, 1, 0.2, 1)
  },
  searchIcon: {
    padding: 10
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    width: "100%"
  }
}));

export default function MenuBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Pesquisar…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={function(e) {
          props.setQuery(e.target.value);
        }}
        disabled={props.loading}
      />
      <IconButton
        color="inherit"
        className={classes.searchIcon}
        aria-label="search"
        onClick={props.handleSearch}
        disabled={props.loading}
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
}
