const MoviesService = require("../services/movies_service.js");

class MoviesController {
  static getAllControl = async (req, res, next) => {
    try {
      const movies = await MoviesService.getAllService(next);
      res.status(200).json(movies.rows);
    } catch (err) {
      next(err);
    }
  };

  static findMovieControl = async (req, res, next) => {
    try {
      const { id } = req.params;
      const movies = await MoviesService.findMovieService(id, next);
      res.status(200).json(movies.rows[0]);
    } catch (err) {
      next(err);
    }
  };

  static insertMovieControl = async (req, res, next) => {
    try {
      const { title, genres, year } = req.body;
      const movies = await MoviesService.insertMovieService(title, genres, year, next);
      res.status(201).json({ message: "Insert movie successfully" });
    } catch (err) {
      next(err);
    }
  };

  static updateMovieControl = async (req, res, next) => {
    try {
      const { year } = req.body;
      const { id } = req.params;
      const movies = await MoviesService.updateMovieService(year, id, next);
      res.status(200).json({ message: "Movie updated successfully" });
    } catch (err) {
      next(err);
    }
  };

  static deleteMovieControl = async (req, res, next) => {
    try {
      const { id } = req.params;
      const movies = await MoviesService.deleteMovieService(id, next);
      res.status(200).json({ message: "Movie deleted successfully" });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MoviesController;
