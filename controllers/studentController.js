const Student = require("../models/student");

const createUser = async (req,res) =>{
try{
const {name, email} = req.body;
const student = await Student.create({name,email});
console.log(user);
res.status(201).send("student created successfully");

}catch(err){
 res.status(500).send(err);
}
}





module.exports={
    createUser,
    
}