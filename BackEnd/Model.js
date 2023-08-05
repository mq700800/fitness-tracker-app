const mongoose = require("mongoose");

const schema = mongoose.Schema({
name :{type:String},
description:{type:String},
activity:{type:String},
duration:{type:String},
date:{type:String}
})

module.exports = mongoose.model('user', schema);