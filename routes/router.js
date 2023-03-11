const express = require("express");
const router = express.Router();
const MoviesController = require("../controllers/movies_controller.js");
const UsersController = require("../controllers/users_controller.js");

// Endpoint movies
router.get("/movies", MoviesController.getAllControl);
router.get("/movies/:id", MoviesController.findMovieControl);
router.post("/movies", MoviesController.insertMovieControl);
router.put("/movies/:id", MoviesController.updateMovieControl);
router.delete("/movies/:id", MoviesController.deleteMovieControl);

// Endpoint users
router.get("/users", UsersController.getAllControl);
router.get("/users/:id", UsersController.findUserControl);
router.post("/users", UsersController.insertUserControl);
router.put("/users/:id", UsersController.updateUserControl);
router.delete("/users/:id", UsersController.deleteUserControl);

module.exports = router;
