const { time } = require('console');
const theatre = require('../models/TheatreSchema');

async function showAvailable(data){
    try{
        const time = data.ticket.split('.')[1];
        console.log(time);
        const result = await theatre.find({$and:[{theatreName : data.theatreName},{movieName: data.movieName}]},{_id:0,[data.ticket]:1});   
      if(result.toString() !== '{}'){
            console.log(result[0])
            let output = await sort(result[0],time);
            return output;
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
async function sort(data,time){
   const show = data.shows[time];
   var avail = [];
   var booked = [];
   try{ 
       await check(Object.entries(show));
       function check(obj){
       for (let i = 0; i < obj.length; i++) {
            console.log(obj[i])
           if(obj[i][1] == 'available'){
               avail.push(obj[i][0])
           }
           else{
               booked.push(obj[i][0]);
           }
       }
   }
   console.log("Available : "+avail);
   console.log("Booked : "+booked);
   return {Available : avail,
           Booked : booked };
   }
   catch(err){
       console.log(err);
       return {msg : "please enter show and seat number as ticket : shows or ticket :shows.10am formats"};
   }
}


exports.avail = {
    showAvailable : showAvailable,
}


