const express = require("express");
const db = require("./utils/db.connection");
const userRouter = require("./routes/userRoutes");

const app = express();
app.use(express.json());

app.use("/", (req,res)=>{
    res.send("Hello world");
})

app.use("/users", userRouter)


db.sync({force:false}).then(()=>{
app.listen(4000,()=>{
    console.log("server is running...")
})
}).catch((err)=>{
console.log(err);
})

