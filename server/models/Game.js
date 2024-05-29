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
      library: {
        type: Schema.Types.ObjectId,
        ref: 'Library',
        required: true
      }
    });