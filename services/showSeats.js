const theatre = require('../models/TheatreSchema');

async function showTickets(data){
    try{
        const result = await theatre.find({$and:[{theatreName : data.theatreName},{movieName: data.movieName}]},{_id:0,[data.ticket]:1});
        if(result.toString() !== '{}'){
            console.log(result);
            return result;
        }
        else{
            console.log("no data found");
            return {msg : "no data found"};
        }
    }
    catch(err){
        console.log(err);
        return {msg : "please enter show and seat number as ticket : shows or ticket :shows.10am formats"};
    }
}

exports.seats = {
    showTickets : showTickets,
}