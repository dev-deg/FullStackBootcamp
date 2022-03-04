import Express from "express";
import cors from "cors";
import { ConnectDb, SaveToDb, GetFromDb } from "./db.js";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const SECRET_KEY = "iuwejhfhuehe80189u31820eidqihqbd!!13";
const app = Express();
const PORT = 3001;

let reqs = 0;

//middleware
app.use(cors());
app.use(cookieParser());

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
      const token = SignSessionToken(email, r[0].name);
      console.log(`${r[0].name} has logged in successfully.`);
      res.send({
        result: "success",
        requests: reqs,
        message: "Correct email and password",
        token: token,
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

//Generating an encrypted token
function SignSessionToken(email, name) {
  return jwt.sign(
    {
      email: email,
      name: name,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
}

//Validating encryption token
function ValidateSesionToken(token) {
  try {
    jwt.verify(token, SECRET_KEY);
    return true;
  } catch (error) {
    return false;
  }
}

ConnectDb();

app.listen(PORT, () => console.log("Server Listening on port: " + PORT));
