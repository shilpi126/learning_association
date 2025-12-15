const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/db.connection');

const Post = sequelize.define('Post',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false

    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
    
})

module.exports = Post;