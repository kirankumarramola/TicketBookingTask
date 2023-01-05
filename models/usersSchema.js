const {Schema,model} = require('mongoose');

const UsersSchema = new Schema({
    name: String,
    email : {
      type:String,
      unique:true
    },
    password : String
  });
  const users = model('userData', UsersSchema);

//   module.exports = userData;
module.exports = users;