const pool = require("../config.js");

class User {
  static getAll = async (next) => {
    const allUsersQuery = `SELECT * FROM users;`;
    try {
      const users = await pool.query(allUsersQuery);
      return users;
    } catch (err) {
      next(err);
    }
  };

  static findUser = async (id, next) => {
    const findIdQuery = `
      SELECT * FROM users
      WHERE id = $1;
      `;
    try {
      const users = await pool.query(findIdQuery, [id]);
      if (users.rows.length === 0) {
        next({ name: "ErrorNotFound" });
      } else {
        return users;
      }
    } catch (err) {
      next(err);
    }
  };

  static insertUser = async (email, gender, password, role, next) => {
    const insertQuery = `
    INSERT INTO users
      ("email", "gender", "password", "role")
    VALUES 
      ($1, $2, $3, $4);
      `;
    try {
      const users = await pool.query(insertQuery, [email, gender, password, role]);
      return users;
    } catch (err) {
      next(err);
    }
  };

  static updateUser = async (id, role, next) => {
    const updateQuery = `
      UPDATE users
      SET role = $1
      WHERE id = $2;
      `;
    try {
      const users = await pool.query(updateQuery, [id, role]);
      return users;
    } catch (err) {
      next(err);
    }
  };

  static deleteUser = async (id, next) => {
    const deleteQuery = `
        DELETE FROM users
        WHERE id = $1;
      `;
    try {
      const users = await pool.query(deleteQuery, [id]);
      return users;
    } catch (err) {
      next(err);
    }
  };
}

module.exports = User;
