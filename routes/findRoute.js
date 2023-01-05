const routes = (module.exports = require("express")());
const {find} = require("../services/find");


routes.get("/find",async (req,res)=>{
    try{
        let data = await find.findDetails();
        // console.log(data);
        res.status(200).send(data);
    }
    catch(err){
        console.log(err);
    }
})