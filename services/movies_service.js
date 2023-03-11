const MoviesRepository = require("../repositories/movies_repository");

class MoviesService {
  static getAllService = async (next) => {
    try {
      const movies = await MoviesRepository.getAllRepo(next);
      return movies;
    } catch (err) {
      next(err);
    }
  };

  static findMovieService = async (id, next) => {
    try {
      const movies = await MoviesRepository.findMovieRepo(id, next);
      return movies;
    } catch (err) {
      next(err);
    }
  };

  static insertMovieService = async (title, genres, year, next) => {
    try {
      const movies = await MoviesRepository.insertMovieRepo(title, genres, year, next);
      return movies;
    } catch (err) {
      next(err);
    }
  };

  static updateMovieService = async (id, year, next) => {
    try {
      const movies = await MoviesRepository.updateMovieRepo(id, year, next);
      return movies;
    } catch (err) {
      next(err);
    }
  };

  static deleteMovieService = async (id, next) => {
    try {
      const movies = await MoviesRepository.deleteMovieRepo(id, next);
      return movies;
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MoviesService;
