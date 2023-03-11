const UsersRepository = require("../repositories/users_repository");

class UsersService {
  static getAllService = async (next) => {
    try {
      const users = await UsersRepository.getAllRepo(next);
      return users;
    } catch (err) {
      next(err);
    }
  };

  static findUserService = async (id, next) => {
    try {
      const users = await UsersRepository.findUserRepo(id, next);
      return users;
    } catch (err) {
      next(err);
    }
  };

  static insertUserService = async (email, gender, password, role, next) => {
    try {
      const users = await UsersRepository.insertUserRepo(email, gender, password, role, next);
      return users;
    } catch (err) {
      next(err);
    }
  };

  static updateUserService = async (id, role, next) => {
    try {
      const users = await UsersRepository.updateUserRepo(id, role, next);
      return users;
    } catch (err) {
      next(err);
    }
  };

  static deleteUserService = async (id, next) => {
    try {
      const users = await UsersRepository.deleteUserRepo(id, next);
      return users;
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UsersService;
