import Express from "express";
import cors from "cors"

const app = Express();
const PORT = 3001;

let reqs = 0;


app.use(cors());

app.get("/secret", (req, res) => {
    const token = req.query.token;
    //console.log(req);
    reqs++;
    if (token == "9ea962b6da432edee2efe9241f81f95f704f061e130ed6a159f19c763b96d741"){
        res.send({result: 200, requests: reqs, message: "Apples can be red or green."});
    }else{
        res.send({result: 401, message: "Unauthorized access."});
    }
})

app.post("/login", (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    reqs++;
    if (email == "test@test.com" && password == "test123"){
        res.send({result: "success", requests: reqs, message: "Correct email and password"});
    }else{
        res.send({result: "unauthorized", message: "Invalid email or password"});
    }
})

//Process Login


app.listen(PORT, () =>
    console.log("Server Listening on port: " + PORT))
