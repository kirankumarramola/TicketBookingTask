const routes = (module.exports = require("express")());
const {avail} = require("../services/available");

routes.get("/",async (req,res)=>{
    try{
        let data = await avail.showAvailable(req.query);
        res.status(200).send(data);
    }
    catch(err){
        console.log(err);
    }
})