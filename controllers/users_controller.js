const UsersService = require("../services/users_service.js");

class UsersController {
  static getAllControl = async (req, res, next) => {
    try {
      const users = await UsersService.getAllService(next);
      res.status(200).json(users.rows);
    } catch (err) {
      next(err);
    }
  };

  static findUserControl = async (req, res, next) => {
    try {
      const { id } = req.params;
      const users = await UsersService.findUserService(id, next);
      res.status(200).json(users.rows[0]);
    } catch (err) {
      next(err);
    }
  };

  static insertUserControl = async (req, res, next) => {
    try {
      const { email, gender, password, role } = req.body;
      const users = await UsersService.insertUserService(email, gender, password, role, next);
      res.status(201).json({ message: "Insert user successfully" });
    } catch (err) {
      next(err);
    }
  };

  static updateUserControl = async (req, res, next) => {
    try {
      const { role } = req.body;
      const { id } = req.params;
      const users = await UsersService.updateUserService(role, id, next);
      res.status(200).json({ message: "User updated successfully" });
    } catch (err) {
      next(err);
    }
  };

  static deleteUserControl = async (req, res, next) => {
    try {
      const { id } = req.params;
      const users = await UsersService.deleteUserService(id, next);
      res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UsersController;
