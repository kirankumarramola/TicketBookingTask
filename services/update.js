async function updateTickets(data){
    const theatre = require('../models/TheatreSchema');
    const result = await theatre.findOne({$and:[{theatreName : data.theatreName},{movieName: data.movieName}]},{_id:0,[data.ticket]:1});
    console.log(result);
    //console.log(data);
    const str = result.toString().slice(26,35);
    console.log(str);
    if(str=='available'){
        const upd = await theatre.updateOne({$and:[{theatreName : data.theatreName},{movieName: data.movieName},{[data.ticket]:'available'}]},{[data.ticket]:'reserved'});
        console.log("ticket booked");
        return {msg : "seat booked"};
    }
    else {
        console.log("ticket already booked");
        return {msg : "the seat is already reserved"};
    }
}

exports.update = {
    updateTickets : updateTickets,
}