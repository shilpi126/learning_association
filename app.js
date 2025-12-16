const express = require("express");
const db = require("./utils/db.connection");
const userRouter = require("./routes/userRoutes");
const courseRouter = require("./routes/courseRoutes");
const studentRouter = require("./routes/");


const app = express();
app.use(express.json());

app.use("/", (req,res)=>{
    res.send("Hello world");
})

app.use("/users", userRouter);

app.use("/course", courseRouter);


db.sync({force:false}).then(()=>{
app.listen(4000,()=>{
    console.log("server is running...")
})
}).catch((err)=>{
console.log(err);
})

