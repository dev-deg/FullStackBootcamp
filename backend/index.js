import Express from "express";
import cors from "cors";
import { ConnectDb, SaveToDb, GetFromDb } from "./db.js";
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
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
  })
);

app.post("/login", (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  reqs++;
  GetFromDb("users", { email: email, password: password }).then((r) => {
    if (r.length === 0) {
      //user does not exist
      res.send({
        result: "unauthorized",
        message: "Invalid email or password",
      });
    } else {
      //user exists
      res.session = { email: r[0].email, name: r[0].name };
      console.log(`${r[0].name} has logged in successfully.`);
      res.send({
        result: "success",
        requests: reqs,
        message: "Correct email and password",
      });
    }
  });
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
