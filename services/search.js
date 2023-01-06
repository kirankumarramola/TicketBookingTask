const theatre = require('../models/TheatreSchema');

async function searchDetails(data){
    const result = await theatre.find(data,{_id:0});
    console.log(result);
    return result;
}

exports.search = {
    searchDetails : searchDetails,
}