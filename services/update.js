const theatre = require('../models/TheatreSchema');
const {mail} = require("./../lib/mail");

async function updateTickets(data){
    const userData = require('./user/login');
    if(userData.name !== undefined){
        const result = await theatre.findOne({$and:[{theatreName : data.theatreName},{movieName: data.movieName}]},{_id:0,[data.ticket]:1});
        console.log(result);
        const str = result.toString().slice(26,35);
        console.log(str);
        if(str=='available'){
            try{
                const upd = await theatre.updateOne({$and:[{theatreName : data.theatreName},{movieName: data.movieName},{[data.ticket]:'available'}]},{[data.ticket]:'reserved'});
            const ticketDetails = data.ticket.toString().split(".");
            const msg = `Hi ${userData.name.toLocaleUpperCase()}\n Your ticket for ${data.movieName} in ${data.theatreName} theatre has been booked\n Ticket Details \n ShowTime : ${ticketDetails[1]}\n Seat Number : ${ticketDetails[2]}`;
            const mailTo = await mail.sendMail(userData.email,msg);
            console.log("ticket booked");
            return {msg : "seat booked"};
            }
            catch(err){
            console.log(err);
            }
        }
        else {
            console.log("ticket already booked");
            return {msg : "the seat is already reserved"};
        }
    }
    else{
        console.log("Login before booking tickets");
        return {msg : "Login before booking tickets"}
    }
}

exports.update = {
    updateTickets : updateTickets,
}