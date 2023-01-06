const users = require('../../models/usersSchema');
const generateToken = require('../../lib/generateToken');

async function userLogin(data){
    const result = await users.findOne({$and:[{email:data.email},{password:data.password}]},{_id:0});
    console.log(result);
    try{
        if(result !== undefined){
            const token = await generateToken(result.name,result.email);
            const data = {
                name : result.name,
                email : result.email
            };
            module.exports = data;
            return {msg : `Welcome ${result.name}`,
                    token : token };
        }
        else{
            return {msg:"invalid credentials"};
        }
    }
    catch(err){
        console.log(err);
        return  {msg:"invalid credentials"};
    }
}
exports.login = {
    userLogin : userLogin
}