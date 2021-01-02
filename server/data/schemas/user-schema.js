const { Schema } = require('mongoose')

// validating email
let isEmail = function(val){
  return new RegExp(/^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/).test(val)
}

// // validating passwords
let isPassowrd = function(val){
  return new RegExp(/([a-z]?[A-Z]+[a-z]+[0-9]+)/).test(val)
}

// USER SCHEMA
const userSchema = new Schema({
  name : {
    type: String,
    required: [true, 'please enter your name'],
    minlength: 3
  },
  email:
  {
    type: String,
    unique: true,
    required: [true, 'please enter an email'],
    validate: [isEmail, 'please enter a valid email']
  },
  password: {
    type: String,
     required: [true, 'please enter a password'],
     minlength: [8, 'passowrd must be at least 8 characters long'],
     validate: [isPassowrd, 'password should contain an uppercase, lowercase letter and a number']
  }
  // address: {
  //   street: {
  //     type: String,
  //     required: false,
  //     minlength: 10
  //   },
  //   zip: {
  //     type: Number,
  //     required: false,
  //     minlength: 6
  //   },
  //   city: {
  //     type: String,
  //     required: false,
  //     minlength: 3
  //   },
  //   state: {
  //     type: String,
  //     required: false,
  //     minlength: 3
  //   },
  //   country: {
  //     type: String,
  //     required: false,
  //     minlength: 3
  //   }
  // },
  // cart: {
  //   length: {
  //     type: Number
  //   },
  //   items: [productSchema],
  //   total: {
  //     type: Number
  //   }
  // },
  // orders: {
  //   type: Array
  // }
})


module.exports = userSchema
