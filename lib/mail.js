const nodemailer = require("nodemailer");

async function sendMail(emailId,msg){

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kirankumarramola@gmail.com',
        pass: 'jroljjinfxkwgbra'
      }
    });
    
    var mailOptions = {
      from: 'kirankumarramola@gmail.com',
      to: emailId, 
      subject: 'Ticket Booking Confirmation',
      text: msg 
      
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    }

exports.mail = {
  sendMail:sendMail
}