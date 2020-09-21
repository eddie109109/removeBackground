const express = require("express");
const path = require("path");
const app = express();
const router = require("./router");
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/static", express.static(path.join(__dirname, "views")));

app.set("view engine", "hbs");

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/index.html"));
// });

app.use("/", router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
