const routes = (module.exports = require("express")());
const {register} = require("../../services/user/register");


routes.get("/register",async (req,res)=>{
    try{
        let data = await register.registerUser(req.query);
        // console.log(data);
        res.status(200).send(data);
    }
    catch(err){
        console.log(err);
    }
})