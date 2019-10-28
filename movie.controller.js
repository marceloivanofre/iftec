const axios = require("axios");

let favoriteMovies = [];

module.exports = {
  async search(req, res) {
    try {
      if (!req.query.title || !req.query.title.trim().length) {
        return res.status(400).json({ msg: "Título inválido" });
      }

      const movies = await axios.get(
        `http://www.omdbapi.com/?apikey=<YOUR-KEY-ACCESS>&s=${req.query.title}`
      );

      return res.status(200).json(movies.data);
    } catch (error) {
      return res.status(500).json({ msg: "Ocorreu um erro interno" });
    }
  },
  addFavorite(req, res) {
    const movie = { ...req.body };

    if (!movie.Title || !movie.Title.trim().length) {
      return res.status(400).json({ msg: "Título do filme inválido" });
    }

    if (!movie.imdbID || !movie.imdbID.trim().length) {
      return res.status(400).json({ msg: "ID do filme inválido" });
    }

    if (!movie.Poster || !movie.Poster.trim().length) {
      return res.status(400).json({ msg: "Poster do filme inválido" });
    }

    favoriteMovies.push(movie);

    res.status(200).json(favoriteMovies);
  },
  getFavorites(req, res) {
    res.status(200).json(favoriteMovies);
  },
  removeFavorite(req, res) {
    const { id } = req.params;

    if (!id || !id.trim().length) {
      return res.status(400).json({ msg: "ID do filme inválido" });
    }

    favoriteMovies = favoriteMovies.filter(movie => movie.imdbID !== id);

    return res.status(200).json("Filme excluído com sucesso");
  }
};
