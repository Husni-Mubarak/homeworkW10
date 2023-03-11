const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/router.js");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

app.listen(port, () => {
  console.log(`Server running at... http://localhost:${port}`);
});
