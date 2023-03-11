const User = require("../models/users_model");

class UsersRepository {
  static getAllRepo = async (next) => {
    try {
      const users = await User.getAll(next);
      return users;
    } catch (err) {
      next(err);
    }
  };

  static findUserRepo = async (id, next) => {
    try {
      const users = await User.findUser(id, next);
      return users;
    } catch (err) {
      next(err);
    }
  };

  static insertUserRepo = async (email, gender, password, role, next) => {
    try {
      const users = await User.insertUser(email, gender, password, role, next);
      return users;
    } catch (err) {
      next(err);
    }
  };

  static updateUserRepo = async (id, role, next) => {
    try {
      const users = await User.updateUser(id, role, next);
      return users;
    } catch (err) {
      next(err);
    }
  };

  static deleteUserRepo = async (id, next) => {
    try {
      const users = await User.deleteUser(id, next);
      return users;
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UsersRepository;
