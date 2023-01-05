// const app = require('express')();
const app = require("./loaders/express");
const routes = require('./routes');

app.use(routes);
app.listen(8080,function(err){
    if(err){
        console.log("Failed to start Server"+ err);
    }
    else
    console.log("Server started on port number 8080");
})