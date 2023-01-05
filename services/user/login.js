async function userLogin(data){
    const users = require('../../models/usersSchema');
    const generateToken = require('../../lib/generateToken');
    const result = await users.findOne({$and:[{email:data.email},{password:data.password}]},{_id:0});
    console.log(result);
    if(result !== undefined){
        const token = await generateToken(result.name,result.email);
        return token;
    }
    else{
        return {msg:"invalid credentials"};
    }
    // return {msg : `Welcome ${result.name}`};
}
exports.login = {
    userLogin : userLogin
}