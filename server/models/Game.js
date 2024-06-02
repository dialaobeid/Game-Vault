const mongoose = require('mongoose');


const { Schema } = mongoose;


const GameSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String
      },
      image: {
        type: String
      },
      platform:{
        type: String
      },
      releaseDate:{
        type: String
      },
    });

module.exports = GameSchema;