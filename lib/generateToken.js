var jwt = require("jsonwebtoken");
const app = require("../loaders/express");

async function generateToken(name,email) {
  try {
    console.log(name, "username",email,"email")
    var token = await jwt.sign(
      {
        name: name,
        email: email
      },
      'secret'
    );
    return token;
  } catch (err) {
    return err;
  }
}

module.exports = generateToken;