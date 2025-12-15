const {Sequelize} = require("sequelize");


const sequelize = new Sequelize(('postdb', 'root' , 'greatJob108'),{
host:'localhost',
dialect:'mysql'
})


(async function(){
try{
    await sequelize.authenticate();
    console.log("DB Connected successfully")
}catch(err){
    console.log("error")
}
}

)();


module.exports = sequelize;