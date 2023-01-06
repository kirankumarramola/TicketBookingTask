const routes = (module.exports = require("express")());
const {seats} = require("./../services/showSeats");
const authorisation = require('./../loaders/jwt');

routes.get("/show",async (req,res)=>{
    try{
        let data = await seats.showTickets(req.query);
        //console.log(data);
        res.status(200).send(data);
    }
    catch(err){
        console.log(err);
    }
})