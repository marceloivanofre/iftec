import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(4)
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      className={classes.root}
    >
      {"Giovane de Loredo e Marcelo Ivanofre | "}
      <Link color="inherit" href="https://brt.ifsp.edu.br/">
        {"IFSP - Campus Barretos"}
      </Link>
      {"."}
    </Typography>
  );
}
