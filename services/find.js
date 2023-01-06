const theatre = require('../models/TheatreSchema');
    
async function findDetails(){
    const result = await theatre.find({},{_id:0});
    console.log(result);
    return result;
}

exports.find = {
    findDetails : findDetails,
}