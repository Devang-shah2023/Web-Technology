const mongoose= require('mongoose');
const express= require('express');
const bodyParser= require('body-parser');


const schema= mongoose.Schema({
    FacultyID: Number,
    FacultyName: String,

});

module.exports= mongoose.model('Faculty', schema);