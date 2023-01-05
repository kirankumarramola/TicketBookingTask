const mongoose = require("mongoose");
// const {getConnection} = require("../logs/getConnection");
// const connect = await getConnection.con();
// const url = connect.url;
const url = 'mongodb+srv://kirankumarramola:KiranKumar%4006@cluster0.apvyog4.mongodb.net/TicketBookingSystem';
const db = mongoose.connection;
// console.log(connect.url,"-------")
mongoose.set('strictQuery',true);
mongoose.connect(url);

db.on("open", () => {
  console.log(`You are connected to Mongo`);
})
  .on("error", (err) => {
    console.log(err);
  })
  .on("close", () => {
    console.log(`You are no longer connected to Mongo`);
  });

  module.exports = mongoose