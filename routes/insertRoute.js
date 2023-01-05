const routes = (module.exports = require("express")());
const {ticketsData} = require("../services/insert");
const bodyparser = require('body-parser');

routes.use(bodyparser.json());

routes.post("/insert",async (req,res)=>{
    try{
        console.log(req.body);
        let data = await ticketsData.insertDetails(req.body);
        console.log(data);
        res.status(200).send(data);
    }
    catch(err){
        console.log(err);
    }
});
