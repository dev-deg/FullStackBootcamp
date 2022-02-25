import Express from "express";
import cors from "cors";
import { ConnectDb, SaveToDb } from "./db.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import { v4 as uuid } from "uuid";

const app = Express();
const PORT = 3001;

let reqs = 0;

const oneDay = 1000 * 60 * 60 * 24;

//middleware
app.use(cors());
app.use(cookieParser());
app.use(
  session({
    genid: (req) => uuid(),
    secret: "I<3dogs",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: oneDay },
  })
);

app.post("/login", (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  reqs++;
  if (email == "test@test.com" && password == "test123") {
    res.send({
      result: "success",
      requests: reqs,
      message: "Correct email and password",
    });
  } else {
    res.send({ result: "unauthorized", message: "Invalid email or password" });
  }
});

app.post("/register", (req, res) => {
  const _email = req.query.email;
  const _password = req.query.password;
  const _name = req.query.name;
  const _surname = req.query.surname;
  reqs++;

  SaveToDb("users", {
    email: _email,
    password: _password,
    name: _name,
    surname: _surname,
  }).then((result) => {
    if (result.acknowledged === true) {
      res.send({
        result: "success",
        requests: reqs,
        message: "User registered!",
      });
    } else {
      res.send({
        result: "failed",
        requests: reqs,
        message: "User not registered!",
      });
    }
  });
});

//Process Login

ConnectDb();

app.listen(PORT, () => console.log("Server Listening on port: " + PORT));
