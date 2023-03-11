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

  static findMovieRepo = async (id, next) => {
    try {
      const movies = await Movie.findMovie(id, next);
      return movies;
    } catch (err) {
      next(err);
    }
  };

  static insertMovieRepo = async (title, genres, year, next) => {
    try {
      const movies = await Movie.insertMovie(title, genres, year, next);
      return movies;
    } catch (err) {
      next(err);
    }
  };

  static updateMovieRepo = async (id, year, next) => {
    try {
      const movies = await Movie.updateMovie(id, year, next);
      return movies;
    } catch (err) {
      next(err);
    }
  };

  static deleteMovieRepo = async (id, next) => {
    try {
      const movies = await Movie.deleteMovie(id, next);
      return movies;
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MoviesRepository;
