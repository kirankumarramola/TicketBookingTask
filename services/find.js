// async function findDetails(){
//     const mongoose = require("mongoose");
//     const {getConnection} = require("../logs/getConnection");
//     // const {theatreModel, theatreSchema} = require("../models/TheatreSchema");

//     // const link = getConnection.con();
//     // await mongoose.connect(link);
//     // console.log("Connected to db");
//     // const model = theatreModel;
//     const express = require("express");
//     var MongoClient = require('mongodb').MongoClient;
//     const connection = await getConnection.con();
//     console.log(connection);
//     var result; 
//     MongoClient.connect(connection.url,async function(err,db){
//         console.log("connected");
//         if(err) throw err;
//         var dbo = db.db(connection.dbName);
//         dbo.collection(connection.collection).findOne({theatreName:"cinepolis"},async function(err,res){
//             if(err) throw err;
//              console.log(res);
//             //  res.status(200).send(res);
//             //result = res;
//             db.close();
//             return "hi";
//         })
        
//     })
// }

// exports.find = {
//     findDetails : findDetails,
// };



async function findDetails(){
    const theatre = require('../models/TheatreSchema');
     const result = await theatre.find({},{_id:0});
    console.log(result);
    return result;
}

exports.find = {
    findDetails : findDetails,
}