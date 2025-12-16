const User = require("./userModel");
const Post = require("./postModel");
const Student = require("./student")
const studentCourses= require("./studentCourse");
const courses = require("./courses");

User.hasMany(Post);
Post.belongsTo(User);

//many to many association
Student.belongsToMany(courses,{through:studentCourses});
courses.belongsToMany(Student,{through:studentCourses});


module.exports = {
    User,
    Post,
    courses,
    studentCourses,
    Student
    
}