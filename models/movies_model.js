const pool = require("../config.js");

class Movie {
  static getAll = async (next) => {
    const allMoviesQuery = `SELECT * FROM movies;`;
    try {
      const movies = await pool.query(allMoviesQuery);
      return movies;
    } catch (err) {
      next(err);
    }
  };

  static findMovie = async (id, next) => {
    const findIdQuery = `
      SELECT * FROM movies
      WHERE id = $1;
      `;
    try {
      const movies = await pool.query(findIdQuery, [id]);
      if (movies.rows.length === 0) {
        next({ name: "ErrorNotFound" });
      } else {
        return movies;
      }
    } catch (err) {
      next(err);
    }
  };

  static insertMovie = async (title, genres, year, next) => {
    const insertQuery = `
    INSERT INTO movies
      ("title", "genres", "year")
    VALUES 
      ($1, $2, $3);
      `;
    try {
      const movies = await pool.query(insertQuery, [title, genres, year]);
      return movies;
    } catch (err) {
      next(err);
    }
  };

  static updateMovie = async (id, year, next) => {
    const updateQuery = `
    UPDATE movies
    SET year = $1
    WHERE id = $2;
    `;
    try {
      const movies = await pool.query(updateQuery, [id, year]);
      return movies;
    } catch (err) {
      next(err);
    }
  };

  static deleteMovie = async (id, next) => {
    const deleteQuery = `
      DELETE FROM movies
      WHERE id = $1;
    `;
    try {
      const movies = await pool.query(deleteQuery, [id]);
      return movies;
    } catch (err) {
      next(err);
    }
  };
}

module.exports = Movie;
