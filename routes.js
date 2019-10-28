const router = require("express").Router();

const Movie = require("./movie.controller.js");

router.get("/movies", Movie.search);
router.post("/movies", Movie.addFavorite);
router.get("/movies/favorites", Movie.getFavorites);
router.delete("/movies/:id", Movie.removeFavorite);

module.exports = router;
