const { Student } = require("../models");
const Course = require("../models/courses");

const addCourse = async (req,res)=>{
try{
    const {name}=req.body;
    const course = await Course.create({"name":name});
    res.status(201).json(course);
}catch(err){
   res.status(500).json(err.message);
}
}


const addStudentsToCourses = async(req,res)=>{
    try{
        const {studentId,courseIds} = req.body;
        const student =  await Student.findByPk(studentId);
        const course = await Course.findAll({
            where:{
                id:courseIds
            }
        })

        await student.addCourse(course);
        const updatedStudent = await Student.findByPk(studentId,{include:Course});
        res.status(200).json(updatedStudent);
    }catch(err){
        console.log(err.message);
    }
}


module.exports = {addCourse,addStudentsToCourses}