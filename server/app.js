var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

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
app.get("/home", (req, res) => {
  res.json({ message: "Server up and runing" });
});
// Post the queries
app.post("/queries", (req, res) => {
  const query = req.body;
  console.log(query);
  queries.push(query);
  res.send("Query posted successfully");
});
// Get the queries
app.get("/queries", (req, res) => {
  res.json(queries);
});

// Post the query reply
app.post("/replies", (req, res) => {
  const reply = req.body;
  console.log(req);
  console.log(reply);
  replies.push(reply);
  res.send("Reply sent successfully");
});
// Get the query replies
app.get("/replies", (req, res) => {
  res.json(replies);
});

console.log(queries, replies);
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
