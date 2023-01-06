const { bodyParser } = require("body-parser");
const connect = require('../loaders/mongoose');

const app = (module.exports = require('express')());

app.get('/',async(req,res)=>
{
    res.send({msg : "Server Started and Running"});
});

app.use("/find", require("./findRoute"));
app.use("/insert",require("./insertRoute"));
app.use("/search",require("./searchRoute"));
app.use("/update",require("./updateRoute"));
app.use("/register",require("./user/registerRoute"));
app.use("/login",require("./user/loginRoute"));
app.use("/show",require("./seatsRoute"));
