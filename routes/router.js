const express = require("express");
const router = express.Router();
const MoviesController = require("../controllers/movies_controller.js");


router.get("/movies", MoviesController.getAllControl);


module.exports = router;
