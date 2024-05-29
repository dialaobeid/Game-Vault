const mongoose = require('mongoose');


const { Schema } = mongoose;
const bcrypt = require('bycrypt');
const Order = require('./Order');

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
      password: {
        type: String,
        required: true,
        minlength: 5
      },
      orders: [Order.schema]
    });