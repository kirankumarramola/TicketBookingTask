const express = require("express");
// const expressJWT = require("express-jwt");
const bearerToken = require("express-bearer-token");
var jwt = require("jsonwebtoken");
// const CONFIG = require("./dotenv");
const app = require("./express");
// const logger = require("./logger");
// const pathToRegexp = require("path-to-regexp");

// app.set("secret", CONFIG.JWT_SECRET);

app.use(bearerToken());
exports.authorisation = async (req, res, next) => {
//   console.log("hello");
//   let string = req.originalUrl;
  if (req.originalUrl.indexOf("/login/login") >= 0) {
    return next();
  }
  if (req.originalUrl.indexOf("/register/register") >= 0) {
    return next();
  }
//   if (req.originalUrl.indexOf("/find/find") >= 0) {
//     return next();
//   }
//   if (req.originalUrl.indexOf("/show/show") >= 0) {
//     return next();
//   }
//   if (req.originalUrl.indexOf("/insert/insert") >= 0) {
//     return next();
//   }
  var token = req.token;
  jwt.verify(token, "secret", async function (err, decoded) {
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
        console.log(req.originalUrl);
        // // res.redirect(req.originalUrl);
        // //   console.log("hello")
        //     res.status(200).send({
        //     code: 200,
        //     message: [
        //       {
        //         message: "authentication successfull",
        //         element: "authenticaton",
        //       },
        //     ],
        //   });
    // res.redirect(req.url);
         return next();
        }
  });
};
