import Express from "express";

const app = Express();
const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/cats",(req,res)=>{
    res.send("Hello Cats!");
})

app.get("/dogs",(req,res)=>{
    res.send("Hello Dogs!");
})

app.listen(PORT,()=>
console.log("Server Listening on port: " + PORT))
