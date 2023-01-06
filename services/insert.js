const theatre = require('../models/TheatreSchema');
const mongoose = require('../loaders/mongoose');

async function insertDetails(data){
    console.log(data);
    try{
        // let model = await TheatreSchema.theatreModel;
        // let data = {
        //     theatreName : "cineplanet",
        //     movieName : "Dhamaka",
        //     address : "kompally",
        //     noOfShows : 4,
        //     price : 150,
        //     shows : {
        //         "10am" : {
        //             a1 : "available",
        //             a2 : "available",
        //             a3 : "available",
        //             a4 : "available",
        //             a5 : "available"
        //         },
        //         "02pm" : {
        //             a1 : "available",
        //             a2 : "available",
        //             a3 : "available",
        //             a4 : "available",
        //             a5 : "available"
        //         },
        //         "06pm" : {
        //             a1 : "available",
        //             a2 : "available",
        //             a3 : "available",
        //             a4 : "available",
        //             a5 : "available"
        //         },
        //         "10pm" : {
        //             a1 : "available",
        //             a2 : "available",
        //             a3 : "available",
        //             a4 : "available",
        //             a5 : "available"
        //         }
        //     }
        // };
        var movie1 = await theatre.collection.insertOne(data);
        console.log("data added");
        return {msg : "movie details added"};
    }
    catch(err){
        console.log(err);
        return {msg : "error details properly as per theatre schema"}
    }
};

exports.ticketsData = {
    insertDetails : insertDetails
}