const routes = (module.exports = require("express")());
const {update} = require("../services/update");

routes.get("/update",async (req,res)=>{
    try{
        let data = await update.updateTickets(req.query);
        //console.log(data);
        res.status(200).send(data);
    }
    catch(err){
        console.log(err);
    }
})