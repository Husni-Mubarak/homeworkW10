const MoviesService = require("../services/movies_service.js");

class MoviesController {
  static getAllControl = async (req, res, next) => {
    try {
      const movies = await MoviesService.getAllService(next);
      res.status(200).json(movies.rows);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MoviesController;
