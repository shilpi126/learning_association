const {User, Post} = require("../models");

const createUser = async (req,res) =>{
try{
const {name, email} = req.body;
const user = await User.create({name,email});
console.log(user);
res.status(201).send("user created successfully");

}catch(err){
 res.status(500).send(err);
}
}


const createPost = async (req,res) =>{
    try{
    const {title,body,userId} = req.body;
    const post = await Post.create({title,body,userId});
    console.log(post);
    res.status(201).send("post created successfully");

    }catch(err){
    res.status(500).send(err);
    }
}


const getUserWithPosts = async()=>{
    try{
        const user = await User.findOne({
            where:{id:req.params.id},
            include : [{model:Post,as:"post"}]
        })

        res.status(201).send("get user with post successfully");

    }catch(err){
        console.log(err);
    }
}

module.exports={
    createUser,
    createPost,
    getUserWithPosts
}