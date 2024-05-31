const mongoose = require('mongoose');


const { Schema } = mongoose;
const bcrypt = require('bycrypt');
const Order = require('./Order');
const { User } = require('.');

const userSchema = new Schema({
    FirstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      userName: {
        type: String,
        required: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
        minlength: 5
      },

      library: [
        {
          type: Schema.Types.ObjectId,
          ref: "Library"
        }
      ]
    });


module.exports = User;