const users = require('../../models/usersSchema');

async function registerUser(data){
    try{
        
    const result = await users.collection.insertOne({name:data.name, email:data.email, password:data.password});
    console.log("Registration completed");
    return {msg : "Registration Completed"};
    }
    catch(err){
        console.log(err);
        return {msg : "email already exist"};
    }
}
exports.register = {
    registerUser : registerUser
}