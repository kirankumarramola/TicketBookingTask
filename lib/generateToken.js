var jwt = require("jsonwebtoken");
const app = require("../loaders/express");
const CONFIG = require('./../loaders/dotenv');

async function generateToken(name,email) {
  try {
    console.log(name, "username",email,"email")
    var token = await jwt.sign(
      {
        name: name,
        email: email
      },
      CONFIG.JWT_SECRET , {expiresIn : "10h"}
    );
    return token;
  } catch (err) {
    return err;
  }
}

module.exports = generateToken;