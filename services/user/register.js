async function registerUser(data){
    const users = require('../../models/usersSchema');
    const result = await users.collection.insertOne({name:data.name, email:data.email, password:data.password});
    console.log("Registration completed");
    return {msg : "Registration Completed"};
}
exports.register = {
    registerUser : registerUser
}