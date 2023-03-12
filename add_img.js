const express = require("express");
const multer = require("multer");
const uploadRouter = express.Router();
const path = require("path");
const pool = require("./config");

const diskstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads"));
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = file.originalname.replace(/\.jpeg|\.jpg|\.png/gi, "") + "-" + uniqueSuffix + path.extname(file.originalname);
    cb(null, filename);
  },
});

uploadRouter.use("uploads", express.static(path.join(__dirname, "uploads")));
uploadRouter.post("/uploads/:id", multer({ storage: diskstorage }).single("image"), (req, res) => {
  const file = req.file;
  const { id } = req.params;
  if (!file) {
    res.status(400).json({ massage: "no file is selected" });
  } else {
    const updateMovieUrl = `
            UPDATE movies    
            SET photo = $1
            WHERE id = $2;
            `;

    const photoUrl = "http://localhost:3000/" + file.filename;
    pool.query(updateMovieUrl, [photoUrl, id], (err, response) => {
      if (err) {
        throw err;
      } else {
        res.status(200).json({ massage: "file uploaded" });
      }

      console.log(photoUrl);
    });
  }
});

module.exports = uploadRouter;
