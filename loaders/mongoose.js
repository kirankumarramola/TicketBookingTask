const mongoose = require("mongoose");
// const {con} = require("../logs/getConnection");
//  const connect = con.getConnection();
//  const url = connect.url;
const CONFIG = require('./../loaders/dotenv');
const url = CONFIG.DB_URL;
const db = mongoose.connection;
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