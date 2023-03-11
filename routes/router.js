const express = require("express");
const router = express.Router();
const MoviesController = require("../controllers/movies_controller.js");

router.get("/movies", MoviesController.getAllControl);
router.get("/movies/:id", MoviesController.findMovieControl);
router.post("/movies", MoviesController.insertMovieControl);
router.put("/movies/:id", MoviesController.updateMovieControl);
router.delete("/movies/:id", MoviesController.deleteMovieControl);

module.exports = router;
