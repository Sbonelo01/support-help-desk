const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

const queries = [];
const replies = [];

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", usersRouter);

//API end point
// app.get("/home", (req, res) => {
//   res.json({ message: "Server up and runing" });
// });
// Post the queries
app.post("/queries", (req, res) => {
  const query = req.body;
  // console.log(queries);
  queries.push(query);
  res.redirect("http://localhost:3000");
});

// Get the queries
app.get("/queries", (req, res) => {
  res.json(queries);
});

// Post the query reply
app.post("/replies", (req, res) => {
  const reply = req.body;

  replies.push(reply);
  res.redirect("http://localhost:3000");
});

// Get the query replies
app.get("/replies", (req, res) => {
  res.json(replies);
});

// console.log(queries, replies, "HJVJHBHJ");
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
