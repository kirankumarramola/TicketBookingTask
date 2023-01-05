const routes = (module.exports = require("express")());
const {search} = require("../services/search");

routes.get("/search",async (req,res)=>{
    try{
        let data = await search.searchDetails(req.query);
        //console.log(data);
        res.status(200).send(data);
    }
    catch(err){
        console.log(err);
    }
})