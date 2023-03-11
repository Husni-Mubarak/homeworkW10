const pool = require("../config.js");

class Movie {
  static getAll = async (next) => {
    const allMoviesQuery = "SELECT * FROM movies;";
    try {
      const movies = await pool.query(allMoviesQuery);
      return movies;
    } catch (err) {
      next(err);
    }
  };
}

module.exports = Movie;
