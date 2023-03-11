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
}

module.exports = MoviesService;
