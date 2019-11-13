import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import grey from "@material-ui/core/colors/grey";

import MenuBar from "./components/menuBar/MenuBar";
import Footer from "./components/footer/Footer";
import MovieCard from "./components/movieCard/MovieCard";

import api from "./services/api";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    backgroundColor: grey[100]
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

export default function App() {
  const classes = useStyles();

  const [movies, setMovies] = useState();
  const [favoritedMovies, setFavoritedMovies] = useState();
  const [showFavorites, setShowFavorites] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const getMoviesByTitle = title => {
    setLoading(true);

    api
      .get(`/movies?title=${title}`)
      .then(resp => {
        setMovies(resp.data.Search);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getFavoritedMovies = () => {
    api
      .get(`/movies/favorites`)
      .then(resp => {
        console.log(resp.data);
        setFavoritedMovies(resp.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleSearch = () => {
    if (query) getMoviesByTitle(query);
  };

  const handleFavorites = movie => {
    api
      .post("/movies", { ...movie })
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleShowFavorites = () => {
    getFavoritedMovies();
    setShowFavorites(!showFavorites);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MenuBar
        handleSearch={handleSearch}
        handleShowFavorites={handleShowFavorites}
        showFavorites={showFavorites}
        setQuery={setQuery}
        setLoading={setLoading}
        loading={loading}
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {movies &&
              !showFavorites &&
              movies.map(movie => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={movie.Title}>
                    <MovieCard data={movie} handleFavorites={handleFavorites} />
                  </Grid>
                );
              })}
            {favoritedMovies &&
              showFavorites &&
              favoritedMovies.map(movie => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={movie.Title}>
                    <MovieCard data={movie} handleFavorites={handleFavorites} />
                  </Grid>
                );
              })}
            {(!movies || !favoritedMovies) && (
              <Grid item xs={12}>
                <Typography variant="h6" align="center" noWrap>
                  {!showFavorites
                    ? "Pesquise um filme!"
                    : "Nenhum filme nos favoritos!"}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Container>
        <Footer />
      </main>
    </div>
  );
}
