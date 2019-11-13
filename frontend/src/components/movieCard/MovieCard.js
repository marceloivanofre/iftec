import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    height: 400
  },
  media: {
    height: 200
  }
}));

export default function MovieCard(props) {
  const classes = useStyles();
  const type = props.data.Type === "movie" ? "Filme" : props.data.Type;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.data.Poster}
        title={props.data.Title}
      />
      <CardHeader
        title={props.data.Title}
        subheader={`${type} lançado em ${props.data.Year}`}
      />
      <CardActions>
        <Button onClick={() => props.handleFavorites(props.data)} size="small">
          {"Favoritar"}
        </Button>
      </CardActions>
    </Card>
  );
}
