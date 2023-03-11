const Movie = require("../models/movies_model");

class MoviesRepository {
  static getAllRepo = async (next) => {
    try {
      const movies = await Movie.getAll(next);
      return movies;
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MoviesRepository;
