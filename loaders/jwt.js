const express = require("express");
const bearerToken = require("express-bearer-token");
var jwt = require("jsonwebtoken");
const app = require("./express");
const CONFIG = require("./dotenv");

app.use(bearerToken());
exports.authorisation = async (req, res, next) => {
  // if (req.originalUrl.indexOf("/") >= 0) {
  //   return next();
  // }
  if (req.originalUrl.indexOf("/login") >= 0) {
    return next();
  }
  if (req.originalUrl.indexOf("/register") >= 0) {
    return next();
  }
  var token = req.token;
  jwt.verify(token, CONFIG.JWT_SECRET, async function (err, decoded) {
    if (err) {
      res.status(401).send({
        success: false,
        code: 401,
        message:
          "Failed to authenticate token. Make sure to include the " +
          "token returned from login in the authorization header " +
          " as a Bearer token",
      });
      return;
    } else {
        console.log("Authentication Successfull");
         return next();
        }
  });
};
