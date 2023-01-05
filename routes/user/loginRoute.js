const routes = (module.exports = require("express")());
const {login} = require("../../services/user/login");


routes.get("/login",async (req,res)=>{
    try{
        let data = await login.userLogin(req.query);
        // console.log(data);
        res.status(200).send(data);
    }
    catch(err){
        console.log(err);
    }
})